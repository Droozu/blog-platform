import React from 'react';
import { useFormContext } from 'react-hook-form';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import stylesFormFiled from '../form-field/form-field.module.scss';
import styles from './form-tag.module.scss';

export default function FormTag({ value, onChange, onKeyDown }) {
  const { register } = useFormContext();
  const tagInputClassName = classnames(stylesFormFiled.input, styles.input);

  return (
    <div className={styles.item}>
      <input className={styles.checkbox} type="checkbox" name="tagList" value={value} defaultChecked ref={register} />
      <input
        className={tagInputClassName}
        type="text"
        name="taginput"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={value}
        placeholder="Tag"
      />
    </div>
  );
}

FormTag.defaultProps = {
  onChange: () => {},
  onKeyDown: () => {},
};

FormTag.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
};
