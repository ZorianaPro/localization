import React from 'react';
import { withTranslation } from 'react-i18next';
import './App.css';
import NewsFeed from "./components/NewsFeed"
import Header from "./components/Header"


class App extends React.Component {

  render() {

    return (
      <div className="App">
        <Header />
        <NewsFeed/>
      </div>
    );
  }
}

export default withTranslation()(App);
