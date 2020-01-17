import React, { useState, useEffect } from 'react';
import news from '../../services/news'

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
			<div>
				<div>{state.totalResults}</div>
			</div>
		)
};

export default NewsFeed;