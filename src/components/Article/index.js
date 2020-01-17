import React, {Component, Suspense} from 'react'
import { withTranslation } from "react-i18next";

import Loader from '../Loader'



class ArticleContent extends Component {

	constructor() {
		super();
		this.state = {
			article: {

			}
		}
	}

	render() {
		const { t, i18n } = this.props;
		return (
			<div className="ArticleContainer">
				<div className="ArticleTitle">{t('title')}</div>
				<div className="ArticleDescription">{t('title')}</div>
			</div>
		)
	}
}

const Article = () => {
	const ArticleTranslated = withTranslation()(ArticleContent);
	return (
	<Suspense fallback={<Loader />}>
		<ArticleTranslated/>
	</Suspense>
	)
};

export default Article