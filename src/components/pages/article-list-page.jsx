import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useAuth from '../../hooks/useAuth';
import { updateArticleList, resetLoading, changePagination } from '../../redux/actions/article-list';
import Spinner from '../spinner';
import ArticleList from '../article-list';
import Pagination from '../pagination';

export default function ArticleListPage() {
  const dispatch = useDispatch();
  const [, token] = useAuth();
  const { isLoaded, articles, articlesCount, page } = useSelector((state) => state.articleList);

  useEffect(() => dispatch(updateArticleList(page, token)), [dispatch, page, token]);
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
