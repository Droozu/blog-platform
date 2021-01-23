import React from 'react';
import { Spin } from 'antd';
import PropTypes from 'prop-types';
import styles from './spinner.module.scss';

export default function Spinner({ spinning }) {
  return (
    <div className={styles.wrapper}>
      <Spin size="large" spinning={spinning} />
    </div>
  );
}

Spinner.defaultProps = {
  spinning: true,
};

Spinner.propTypes = {
  spinning: PropTypes.bool,
};
