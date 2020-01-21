import React from 'react';
import './index.css'
import {useTranslation} from "react-i18next";
import i18n from '../../i18n/i18n';

const NewsPreview = props => {
	const { t, i18n } = useTranslation();

	return (
		<div className="NewsPreview">
			<div className="content content--left">
				<img className="preview-image" src={props.article.urlToImage} alt=""/>
			</div>
			<div className="content content--right">
				<a href={props.article.url}>{props.article.title}</a>
				<div>{t('article.author')}: {props.article.author}</div>
				<div>{props.article.description}</div>
				<div>Published at: {props.article.publishedAt}</div>
			</div>
		</div>
	)
};

export default NewsPreview