import React, {  } from 'react';
import {useTranslation} from "react-i18next";
import i18n from 'i18next';

// export const { t, i18n } = useTranslation();

export const changeLanguage = lng => {
	i18n.changeLanguage(lng);
};

export const LanguageBar = () => {
	return (
		<div>
			<button onClick={() => changeLanguage('de')}>de</button>
			<button onClick={() => changeLanguage('en')}>en</button>
		</div>
	)
};

const Header = props => {
	const { t, i18n } = useTranslation();
	return (
		<div>
			<p>{t('title')}</p>
			<LanguageBar/>
		</div>
	)
};

	export default Header;