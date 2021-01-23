import React from 'react';
import { useFormContext } from 'react-hook-form';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../button';
import stylesFormFiled from '../form-field/form-field.module.scss';
import styles from './form-tag.module.scss';

export default function FormTag({ value, onChange, onDelete }) {
  const { register } = useFormContext();
  const tagInputClassName = classnames(stylesFormFiled.input, styles.input);

  return (
    <div className={styles.item}>
      <input className={styles.checkbox} type="checkbox" name="tagList" value={value} defaultChecked ref={register} />
      <input className={tagInputClassName} type="text" value={value} onChange={onChange} placeholder="Tag" />
      <Button label="Delete" theme="dangerous" onClick={onDelete} />
    </div>
  );
}

FormTag.defaultProps = {
  onChange: () => {},
  onDelete: () => {},
};

FormTag.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onDelete: PropTypes.func,
};
