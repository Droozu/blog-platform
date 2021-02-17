import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useAuth from '../../hooks/useAuth';
import { updateArticleList, resetLoading, changePagination } from '../../redux/actions/article-list';
import Spinner from '../spinner';
import ArticleList from '../article-list';
import Pagination from '../pagination';

export default function MyArticleListPage() {
  const dispatch = useDispatch();
  const [, token] = useAuth();
  const user = useSelector((state) => state.user);
  const { isLoaded, articles, articlesCount, page } = useSelector((state) => state.articleList);

  useEffect(() => dispatch(updateArticleList(page, token, user.username)), [dispatch, page, token, user.username]);
  useEffect(() => () => dispatch(resetLoading()), [dispatch]);

  const handlePaginationChange = (activePage) => {
    dispatch(resetLoading());
    dispatch(changePagination(activePage));
  };

  if (!isLoaded) return <Spinner />;

  return (
    <>
      <ArticleList articleList={articles} />
      <Pagination page={page} total={articlesCount} onChange={handlePaginationChange} />
    </>
  );
}
