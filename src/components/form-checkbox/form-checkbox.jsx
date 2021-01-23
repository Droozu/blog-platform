import React from 'react';
import { useFormContext } from 'react-hook-form';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './form-checkbox.module.scss';

export default function FormCheckbox({ label, attributes, validation }) {
  const { register, errors } = useFormContext();
  const labelClassName = classnames(styles.label, { [styles['label--required']]: errors[attributes.name] });

  return (
    <div className={styles.checkbox}>
      <input className={styles.input} type="checkbox" {...attributes} ref={register(validation)} />
      <label className={labelClassName} htmlFor={attributes.id}>
        {label}
      </label>
    </div>
  );
}

FormCheckbox.defaultProps = {
  validation: {},
};

FormCheckbox.propTypes = {
  label: PropTypes.string.isRequired,
  attributes: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  }).isRequired,
  validation: PropTypes.instanceOf(Object),
};
