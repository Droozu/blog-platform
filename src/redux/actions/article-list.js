import { SAVE_ARTICLE_LIST, CHANGE_PAGINATION, RESET_LOADING } from '../types';
import { getArticleList } from '../../api/article';

const saveArticleList = (articles, articlesCount, page) => ({ type: SAVE_ARTICLE_LIST, articles, articlesCount, page });

const updateArticleList = (page, token) => (dispatch) => {
  getArticleList(page, token).then((json) => {
    const { articles, articlesCount } = json;
    dispatch(saveArticleList(articles, articlesCount, page));
  });
};
const resetLoading = () => ({ type: RESET_LOADING });
const changePagination = (page) => ({ type: CHANGE_PAGINATION, page });

export { updateArticleList, changePagination, resetLoading };
