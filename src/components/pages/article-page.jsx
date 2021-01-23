import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useAuth from '../../hooks/useAuth';
import useAuthor from '../../hooks/useAuthor';
import useSlug from '../../hooks/useSlug';
import { getArticle, setArticleLoadedTrue, setArticleLoadedFalse } from '../../redux/actions/article';
import Spinner from '../spinner';
import Article from '../article';

export default function ArticlePage() {
  const dispatch = useDispatch();
  const isTheSameAuthor = useAuthor();
  const [currentSlug, , isTheSameSlug] = useSlug();
  const [, token] = useAuth();
  const { isLoaded, article } = useSelector((state) => state.article);

  useEffect(() => {
    if (!isLoaded) {
      if (isTheSameSlug && isTheSameAuthor) dispatch(setArticleLoadedTrue());
      else dispatch(getArticle(currentSlug, token));
    }
  }, [dispatch, currentSlug, token, isLoaded, isTheSameSlug, isTheSameAuthor]);

  useEffect(() => () => dispatch(setArticleLoadedFalse()), [dispatch]);

  return <> {isLoaded ? <Article article={article} /> : <Spinner />} </>;
}
