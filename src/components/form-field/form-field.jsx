import React from 'react';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './form-field.module.scss';

export default function FormField({ label, attributes, validation }) {
  const { register, errors } = useFormContext();
  const inputClassName = classnames(styles.input, { [styles['input--required']]: errors[attributes.name] });

  return (
    <label className={styles.label}>
      {label}
      <input className={inputClassName} {...attributes} ref={register(validation)} />
      <span className={styles.error}>
        <ErrorMessage errors={errors} name={attributes.name} />
      </span>
    </label>
  );
}

FormField.defaultProps = {
  validation: {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  attributes: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  validation: PropTypes.instanceOf(Object),
};
