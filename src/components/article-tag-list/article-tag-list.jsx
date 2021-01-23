import React from 'react';
import PropTypes from 'prop-types';
import styles from './article-tag-list.module.scss';

export default function ArticleTagList({ tagList }) {
  if (!tagList.length) return null;

  const tagItems = tagList.map((tag) => (
    <li key={tag} className={styles.item}>
      {tag}
    </li>
  ));

  return <ul className={styles.container}>{tagItems}</ul>;
}

ArticleTagList.propTypes = {
  tagList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
