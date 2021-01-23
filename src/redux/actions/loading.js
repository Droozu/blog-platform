import {
  LOADING_START,
  LOADING_STOP,
  START_LOADING_ARTICLE,
  STOP_LOADING_ARTICLE,
  START_LOADING_ARTICLE_LIST,
  STOP_LOADING_ARTICLE_LIST,
} from '../types';

export const startLoading = () => ({ type: LOADING_START });
export const stopLoading = () => ({ type: LOADING_STOP });

export const startLoadingArticle = () => ({ type: START_LOADING_ARTICLE });
export const stopLoadingArticle = () => ({ type: STOP_LOADING_ARTICLE });
export const startLoadingArticleList = () => ({ type: START_LOADING_ARTICLE_LIST });
export const stopLoadingArticleList = () => ({ type: STOP_LOADING_ARTICLE_LIST });
