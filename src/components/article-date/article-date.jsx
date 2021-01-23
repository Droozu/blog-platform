import React from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import styles from './article-date.module.scss';

export default function ArticleDate({ date }) {
  return <span className={styles.inner}>{format(new Date(date), 'MMMM d, y')}</span>;
}

ArticleDate.propTypes = {
  date: PropTypes.string.isRequired,
};
