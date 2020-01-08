import React, { Component, Suspense } from 'react';
import { useTranslation, withTranslation, Trans } from 'react-i18next';

// use hoc for class based components
class LegacyWelcomeClass extends Component {
	render() {
		const { t, i18n } = this.props;
		return <h2>{t('title')}</h2>;
	}
}
const Welcome = withTranslation()(LegacyWelcomeClass);

// Component using the Trans component
const MyComponent = () => {
	return (
		<Trans i18nKey="description.part1"/>
	);
};

// page uses the hook
const Page = ()  => {
	const { t, i18n } = useTranslation();

	const changeLanguage = lng => {
		i18n.changeLanguage(lng);
	};

	return (
		<div className="TestTranslate">
			<div className="TestTranslate-header">
				<Welcome />
				<button onClick={() => changeLanguage('de')}>de</button>
				<button onClick={() => changeLanguage('en')}>en</button>
			</div>
			<div className="TestTranslate-intro">
				<MyComponent />
			</div>
			<div>{t('description.part2')}</div>
		</div>
	);
}

// loading component for suspense fallback
const Loader = () => (
	<div className="TestTranslate">
		<div>loading...</div>
	</div>
);

// here app catches the suspense from page in case translations are not yet loaded
export default function L18nextComponent() {
	return (
		<Suspense fallback={<Loader />}>
			<Page />
		</Suspense>
	);
}