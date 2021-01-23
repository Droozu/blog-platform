import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { createArticle, setArticleUnloadedFalse, setArticleUnloadedTrue } from '../../redux/actions/article';
import FormBox from '../form-box';
import FormArticle from '../form-article';
import Spinner from '../spinner';

export default function NewArticlePage() {
  const dispatch = useDispatch();
  const [, token] = useAuth();
  const history = useHistory();
  const methods = useForm();
  const { isUnloaded } = useSelector((state) => state.article);

  useEffect(() => () => dispatch(setArticleUnloadedTrue()), [dispatch]);

  const handleFormSubmit = (data) => {
    dispatch(setArticleUnloadedFalse());
    const body = { article: data };
    dispatch(createArticle(body, token, history, methods.setError));
  };

  return (
    <FormBox methods={methods} onSubmit={handleFormSubmit} title="Create new article" button="Send">
      <Spinner spinning={!isUnloaded} />
      <FormArticle />
    </FormBox>
  );
}
