import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
// load translation using xhr -> see /public/locales
// learn more: https://github.com/i18next/i18next-xhr-backend
.use(Backend)
// detect user language
// learn more: https://github.com/i18next/i18next-browser-languageDetector
.use(LanguageDetector)
// pass the i18n instance to react-i18next.
.use(initReactI18next)
// init i18next
// for all options read: https://www.i18next.com/overview/configuration-options
.init({
	react: {
		useSuspense: false, //   <---- this will do the magic
		wait: true
	},
	backend: {
		loadPath: '/locales/{{lng}}/{{ns}}.json',
			// path to post missing resources
		addPath: '/locales/add/{{lng}}/{{ns}}',
		allowMultiLoading: true,
	},
	lng: 'en',

	// allow keys to be phrases having `:`, `.`
	nsSeparator: false,
	keySeparator: false,

	// do not load a fallback
	fallbackLng: 'en',
	fallbackNS: 'translation',
	debug: true,
	ns: ["translation", "header", "random"],
	defaultNS: "translation",
	interpolation: {
		escapeValue: false, // not needed for react as it escapes by default
	},
	saveMissing: true
});

i18n
.loadNamespaces(['translation','header'])
.then(() => {});


i18n.on('missingKey', function(lngs, namespace, key, res) {console.log(key)});

export default i18n;