import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { authUser } from '../../api/user';
import { startLoading, stopLoading } from '../../redux/actions/loading';
import { logIn } from '../../redux/actions/user';
import FormBox from '../form-box';
import FormField from '../form-field';
import ValidationRule from '../../validation-rules';
import Spinner from '../spinner';

export default function SignInPage() {
  const methods = useForm();
  const { setError } = methods;
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleFormSubmit = useCallback(
    (data) => {
      const body = { user: data };
      dispatch(startLoading());

      authUser(body).then((json) => {
        dispatch(stopLoading());

        if (json.user) {
          const { user } = json;
          dispatch(logIn(user));
          history.push('/articles');
        }

        if (json.errors) {
          const { errors: serverErrors } = json;
          Object.keys(serverErrors).forEach((key) => {
            setError('email', { message: `${key} ${serverErrors[key]}` });
            setError('password', { message: `${key} ${serverErrors[key]}` });
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
      title="Sign In"
      button="Login"
      footnote={<Footnote />}
      size="s"
    >
      <Spinner spinning={loading} />
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
    </FormBox>
  );
}

function Footnote() {
  return (
    <>
      Don’t have an account? <Link to="/sign-up">Sign Up</Link>.
    </>
  );
}
