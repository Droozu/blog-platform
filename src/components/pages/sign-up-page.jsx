import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { registerUser } from '../../api/user';
import { logIn } from '../../redux/actions/user';
import { startLoading, stopLoading } from '../../redux/actions/loading';
import Spinner from '../spinner';
import FormBox from '../form-box';
import FormField from '../form-field';
import FormCheckbox from '../form-checkbox';
import ValidationRule from '../../validation-rules';

export default function SignUpPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const methods = useForm();
  const { watch, setError } = methods;
  const password = watch('password');
  const loading = useSelector((state) => state.loading);

  const handleFormSubmit = useCallback(
    (data) => {
      const body = { user: data };
      dispatch(startLoading());

      registerUser(body).then((json) => {
        dispatch(stopLoading());

        if (json.user) {
          const { user } = json;
          dispatch(logIn(user));
          history.push('/articles');
        }

        if (json.errors) {
          const { errors: serverErrors } = json;
          Object.keys(serverErrors).forEach((key) => {
            serverErrors[key].forEach((error) => setError(key, { message: error }));
          });
        }
      });
    },
    [dispatch, history, setError]
  );

  return (
    <FormBox
      methods={methods}
      onSubmit={handleFormSubmit}
      title="Create new account"
      button="Create"
      footnote={<Footnote />}
      size="s"
    >
      <Spinner spinning={loading} />
      <FormField
        label="Username"
        attributes={{ type: 'text', name: 'username', placeholder: 'Username' }}
        validation={ValidationRule.USERNAME}
      />
      <FormField
        label="Email address"
        attributes={{ type: 'email', name: 'email', placeholder: 'Email address' }}
        validation={ValidationRule.EMAIL}
      />
      <FormField
        label="Password"
        attributes={{ type: 'password', name: 'password', placeholder: 'Password' }}
        validation={ValidationRule.PASSWORD}
      />
      <FormField
        label="Repeat Password"
        attributes={{ type: 'password', name: 'repeat-password', placeholder: 'Password' }}
        validation={{ ...ValidationRule.PASSWORD, validate: (value) => value === password || 'Passwords must match' }}
      />
      <div style={{ marginTop: '21px', marginBottom: '8px', borderTop: '1px solid #e8e8e8' }}>
        <FormCheckbox
          label="I agree to the processing of my personal information"
          attributes={{ id: 'agree-test', name: 'agreement', value: true, defaultChecked: true }}
          validation={{ required: true }}
        />
      </div>
    </FormBox>
  );
}

function Footnote() {
  return (
    <>
      Already have an account? <Link to="/sign-in">Sign In</Link>.
    </>
  );
}
