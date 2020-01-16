Update nvn

    nvm install 12.13.0
Clone repo

Start project

    npx create-react-app salary-calculator/
Install husky to add git hooks to project

    npm install husky --save-dev         
Install fetch-mock to mock API requests via for unit tests

    npm install fetch-mock --save-dev   
Install jest-unit to write unit tests

    npm install husky --save-dev
Install @haensl/eslint-config 

    npm install @haensl/eslint-config --save-dev
Setup package.json

    #to use node version not less than this
    "engines": {
        "node": ">=12.13.0" 
    }
    
    #to add hooks
    ....
    "husky": {
        "hooks": {
            "pre-commit": "npm test",
            "pre-push": "npm test"
        }
    }  
    
    #setup command to run unit test
    "scripts": {
        ...
        "test:ci": "npm test -- --ci --reporters='default' --reporter='jest-junit'"
    }

    #where to save tests  results
    ...
    "jest-unit": {
        "outputDirectory": "test-results/jest",
        "outputName": "result.xml",
        "suiteName": "salary-calculator-unit-test"
    } 
Run project
    
    npm start
Create folders in src for components and services

Create production build in 'build/' folder

    npm run build
Add '.gitignore' file
   
    ...
    # dependencies
    /node_modules
    /.pnp
    .pnp.js
    
    # testing
    /coverage
    
    # production
    /build
    
    # misc
    .DS_Store
    .env.local
    .env.development.local
    .env.test.local
    .env.production.local
    
    npm-debug.log*
    yarn-debug.log*
    yarn-error.log*
    
    #test results
    /test-results

  
Add CHANGELOG.md

Create Dockerile
        
    FROM node:lts-alpine
    COPY --chown=node:node build/ /var/www/ 
    USER node
    WOKDIR /var/www/ 
    RUN npm i --production
    ENTRYPOINT ["npm"] 
    CMD ["start"]
    
Create docker-compose.yml
    
    version: '3'
    services: 
        salary-calculator: 
            build: .
            image: registry.experteer.com/experteer/salary-calculator:$VERSION
            container_name: salary-calculator
            restart: unless-stoped
            enviroment:
                - NODE_ENV=production

Create '.gitlab-ci.yml'

    stages: 
        - test
        - bundle
        - build
    test: 
        image: node:lts-alpine
        stage: test
        before_script: 
           - npm install
        script: 
           - npm run test-ci
        artifects: 
           name: $CI_JOB_NAME
           when: always
           reports:
            junit: test-results/jest/results.xml
        cache: 
            path: 
              - node_modules/
            key: $CI_COMMIT_REF_SLUG
    bundle:
        image: node:lts-alpine
        stage: bundle
        before_script: 
          - npm install 
        script: 
            - npm run build   
            - cp package* build/
        artifacts:
            name: $CI_JOB_NAME
            paths: 
                - build
        dependencies:
            - test
    build:
      image: docker:stable
      stage: build
      before_script:
        - export VERSION=$(head -n1 CHANGELOG.md | grep -o '\([0-9]\+\.\)\{2\}[0-9]\+')
        - export CI_REGISTRY_AUTH_TOKEN=$(echo -n "gitlab-ci-token:${CI_JOB_TOKEN}" | base64)
      script:
        - docker login -u gitlab-ci-token -p $CI_JOB_TOKEN $CI_REGISTRY
        - docker pull $CI_REGISTRY_IMAGE:latest || true
        - docker build --cache-from $CI_REGISTRY_IMAGE:latest --tag $CI_REGISTRY_IMAGE:$VERSION --tag $CI_REGISTRY_IMAGE:latest .
        - docker push $CI_REGISTRY_IMAGE:$VERSION
        - docker push $CI_REGISTRY_IMAGE:latest
        - docker logout $CI_REGISTRY
      dependencies:
        - bundle
      only:
        refs:
          - master
      tags:
        - frontend
                
Build docker image 

    docker build
    
For testing

     npm install enzyme enzyme-adapter-react-16 react-test-renderer --save-dev
     
Create src/testSetup.js

    import { configure } from 'enzyme';
    import Adapter from 'enzyme-adapter-react-16';
    
    module.exports = () => {
      configure({ adapter: new Adapter() });
    }
