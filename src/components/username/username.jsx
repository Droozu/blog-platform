import React from 'react';
import PropTypes from 'prop-types';
import styles from './username.module.scss';

export default function Username({ username }) {
  return <span className={styles.username}>{username}</span>;
}

Username.propTypes = {
  username: PropTypes.string.isRequired,
};
