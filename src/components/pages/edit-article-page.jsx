import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import useSlug from '../../hooks/useSlug';
import useAuthor from '../../hooks/useAuthor';
import {
  getArticle,
  editArticle,
  setArticleUnloadedTrue,
  setArticleUnloadedFalse,
  setArticleLoadedTrue,
} from '../../redux/actions/article';
import FormBox from '../form-box';
import Spinner from '../spinner';
import FormArticle from '../form-article';

export default function EditArticlePage() {
  const [currentSlug, articleSlug, isSlug] = useSlug();
  const isAuthor = useAuthor();
  const dispatch = useDispatch();
  const history = useHistory();
  const methods = useForm();
  const { token } = useSelector((state) => state.user);
  const { isLoaded, article, isUnloaded } = useSelector((state) => state.article);

  useEffect(() => {
    if (!isLoaded) {
      if (!isSlug) dispatch(getArticle(currentSlug));
      if (isSlug && !isAuthor) history.push(`/articles/${articleSlug}`);
      if (isSlug && isAuthor) dispatch(setArticleLoadedTrue());
    }
  }, [isLoaded, isSlug, dispatch, currentSlug, isAuthor, history, articleSlug]);

  useEffect(() => () => dispatch(setArticleUnloadedTrue()), [dispatch]);

  const handleFormSubmit = (data) => {
    dispatch(setArticleUnloadedFalse());
    const body = { article: data };
    dispatch(editArticle(articleSlug, body, token, history, methods.setError));
  };

  if (!isLoaded) return <Spinner />;

  return (
    <FormBox methods={methods} onSubmit={handleFormSubmit} title="Edit article" button="Send">
      <Spinner spinning={!isUnloaded} />
      <FormArticle
        defaultTitle={article.title}
        defaultDescription={article.description}
        defaultBody={article.body}
        defaultTagList={article.tagList}
      />
    </FormBox>
  );
}
