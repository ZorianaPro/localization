import React, { useState, useEffect } from 'react';
import news from '../../services/news';
import NewsPreview from '../NewsPreview';
import { useTranslation } from "react-i18next";

const NewsFeed = () => {

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


		const { t, i18n } = useTranslation();

		return (

			<div>
				<span>{t('nesting', {count: state.totalResults})}</span>
				{
					Array.from(state.articles).map((value, k) => {
						return <NewsPreview article={value} key={k}/>
					})
				}
				</div>
		)
};

export default NewsFeed;