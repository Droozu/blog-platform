import React from 'react';
import PropTypes from 'prop-types';
import Article from '../article';
import styles from './article-list.module.scss';

export default function ArticleList({ articleList }) {
  return (
    <ul className={styles.container}>
      {articleList.map((article) => (
        <li key={article.slug}>
          <Article article={article} review={false} />
        </li>
      ))}
    </ul>
  );
}

ArticleList.propTypes = {
  articleList: PropTypes.arrayOf(Object).isRequired,
};
