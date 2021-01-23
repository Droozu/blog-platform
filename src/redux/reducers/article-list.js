import { SAVE_ARTICLE_LIST, RESET_LOADING, CHANGE_PAGINATION } from '../types';

const initialState = { isLoaded: false, articles: null, articlesCount: 0, page: 1 };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_ARTICLE_LIST:
      return { isLoaded: true, articles: action.articles, articlesCount: action.articlesCount, page: action.page };
    case RESET_LOADING:
      return { ...state, isLoaded: false };
    case CHANGE_PAGINATION:
      return { ...state, page: action.page };
    default:
      return state;
  }
}
