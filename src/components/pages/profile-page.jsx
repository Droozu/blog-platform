import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import FormBox from '../form-box';
import FormField from '../form-field';
import ValidationRule from '../../validation-rules';
import Spinner from '../spinner';
import { startLoading, stopLoading } from '../../redux/actions/loading';
import { updateUser } from '../../api/user';
import SuccessMessage from '../success-message';
import { logIn } from '../../redux/actions/user';

function deleteEmptyValues(formData) {
  return Object.fromEntries(Object.entries(formData).filter((item) => Boolean(item[1])));
}

export default function ProfilePage() {
  const methods = useForm();
  const { setError } = methods;
  const loading = useSelector((state) => state.loading);
  const { token, username, email } = useSelector((state) => state.user);
  const dispatch = useDispatch();



  const handleFormSubmit = useCallback(
    (data) => {
      const body = { user: deleteEmptyValues(data) };
      dispatch(startLoading());

      updateUser(body, token).then((json) => {
        dispatch(stopLoading());

        if (json.user) {
          const { user: serverUser } = json;
          dispatch(logIn(serverUser));
            SuccessMessage();
        }

        if (json.errors) {
          const { errors: serverErrors } = json;
          Object.keys(serverErrors).forEach((key) => {
            serverErrors[key].forEach((error) => setError(key, { message: error }));
          });
        }
      });
    },
    [dispatch, setError, token]
  );

  return (
    <FormBox methods={methods} onSubmit={handleFormSubmit} title="Edit Profile" button="Save" size="s">
      <Spinner spinning={loading} />
      <FormField
        label="Username"
        attributes={{ type: 'text', name: 'username', placeholder: 'Username', defaultValue: username }}
        validation={ValidationRule.USERNAME}
      />
      <FormField
        label="Email address"
        attributes={{ type: 'email', name: 'email', placeholder: 'Email address', defaultValue: email }}
        validation={ValidationRule.EMAIL}
      />
      <FormField
        label="New password"
        attributes={{ type: 'password', name: 'password', placeholder: 'New password' }}
        validation={{ ...ValidationRule.PASSWORD, required: false }}
      />
      <FormField
        label="Avatar image (url)"
        attributes={{ type: 'url', name: 'image', placeholder: 'Avatar image' }}
        validation={ValidationRule.URL}
      />
    </FormBox>
  );
}
