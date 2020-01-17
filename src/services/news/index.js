import APIkeys from '../../support/APIkeys';


const getNews = () => {
	return fetch(`https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=${APIkeys.googleNews}`, {
		method: 'GET'
	}).then((res) => {
		if (res.ok) {
			return res.json();
		}

		throw Error (`${res.status}: ${res.statusText}`)
	})
};

export default {
	getNews
};