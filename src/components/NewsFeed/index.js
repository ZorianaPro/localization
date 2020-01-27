import React, { useState, useEffect } from 'react';
import { withTranslation} from 'react-i18next';
import news from '../../services/news';
import NewsPreview from '../NewsPreview';

const NewsFeed = ({ t }) => {

		const [state, setState] = useState({
			articles: '',
			totalResults: 0
		});

		useEffect(() => {
				news.getNews().then(data => {
					setState(
						{
							articles: data.articles,
							totalResults: data.totalResults
						}
					)
				});
		}, []);

		return (

			<div>
				<span>{t('nesting', {count: state.totalResults})}</span>
				<span>{t('No one says a key can not be the fallback.')}</span>
				{
					Array.from(state.articles).map((value, k) => {
						return <NewsPreview article={value} key={k} t={ t }/>
					})
				}
				</div>
		)
};

export default withTranslation()(NewsFeed);