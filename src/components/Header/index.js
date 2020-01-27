import React, {  } from 'react';
import { withTranslation } from "react-i18next";


const Header = ({ t, i18n }, props) => {
	return (
		<div>
			<p>{t('Need to save this text')}</p>
			<button onClick={() => i18n.changeLanguage('de')}>de</button>
			<button onClick={() => i18n.changeLanguage('en')}>en</button>
		</div>
	)
};

	export default withTranslation('header')(Header);