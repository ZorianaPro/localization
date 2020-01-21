import React, { useState, useEffect } from 'react';
import news from '../../services/news';
import NewsPreview from '../NewsPreview';

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



		return (
			<div>{Array.from(state.articles).map((value, k) => {

					return <NewsPreview article={value} key={k}/>
			})}</div>
		)
};

export default NewsFeed;