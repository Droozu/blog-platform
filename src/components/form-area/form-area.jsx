import React from 'react';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import TextareaAutosize from 'react-textarea-autosize';
import stylesFormFiled from '../form-field/form-field.module.scss';

export default function FormArea({ label, attributes, validation }) {
  const { register, errors } = useFormContext();
  const textareaClassName = classnames(stylesFormFiled.input, {
    [stylesFormFiled['input--required']]: errors[attributes.name],
  });

  return (
    <label className={stylesFormFiled.label}>
      {label}
      <TextareaAutosize className={textareaClassName} {...attributes} ref={register(validation)} />
      <span className={stylesFormFiled.error}>
        <ErrorMessage errors={errors} name={attributes.name} />
      </span>
    </label>
  );
}

FormArea.defaultProps = {
  validation: {},
};

FormArea.propTypes = {
  label: PropTypes.string.isRequired,
  attributes: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  validation: PropTypes.instanceOf(Object),
};
