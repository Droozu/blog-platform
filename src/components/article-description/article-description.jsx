import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './article-description.module.scss';

export default function ArticleDescription({ description, theme }) {
  const descriptionClassName = classnames(
    styles.inner,
    { [styles.inner_theme_secondary]: theme === 'default' },
    styles[`inner_theme_${theme}`]
  );

  return <p className={descriptionClassName}>{description}</p>;
}

ArticleDescription.defaultProps = {
  theme: 'default',
};

ArticleDescription.propTypes = {
  description: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['default', 'main', 'secondary']),
};
