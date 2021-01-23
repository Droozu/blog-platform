import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

export default function Button({ label, size, border, theme, style, onClick }) {
  const buttonClassName = classnames(styles.inner, styles[`size_${size}`], styles[`theme_${theme}`], {
    [styles['no-border']]: !border,
  });

  return (
    <button className={buttonClassName} style={style} type="button" onClick={onClick}>
      {label}
    </button>
  );
}

Button.defaultProps = {
  theme: `default`,
  size: `medium`,
  border: true,
  style: {},
  onClick: () => {},
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['default', 'success', 'dangerous', 'primary']),
  size: PropTypes.oneOf(['small', `medium`, 'large']),
  border: PropTypes.bool,
  style: PropTypes.instanceOf(Object),
  onClick: PropTypes.func,
};
