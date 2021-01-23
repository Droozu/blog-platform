import React from 'react';
import { Pagination } from 'antd';
import PropTypes from 'prop-types';
import styles from './pagination.module.scss';

export default function ArticleListPage({ page, total, onChange }) {
  return (
    <div className={styles.wrapper}>
      <Pagination
        size="small"
        current={page}
        total={total}
        onChange={onChange}
        showSizeChanger={false}
        hideOnSinglePage
      />
    </div>
  );
}

ArticleListPage.defaultProps = {
  onChange: () => {},
};

ArticleListPage.propTypes = {
  page: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onChange: PropTypes.func,
};
