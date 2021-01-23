import React from 'react';
import PropTypes from 'prop-types';
import styles from './article-title.module.scss';

export default function ArticleTitle({ title }) {
  return <h3 className={styles.inner}>{title}</h3>;
}

ArticleTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
