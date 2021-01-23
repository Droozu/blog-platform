import {
  SET_ARTICLE_LOADED_TRUE,
  SET_ARTICLE_LOADED_FALSE,
  SET_ARTICLE_UNLOADED_TRUE,
  SET_ARTICLE_UNLOADED_FALSE,
  GET_ARTICLE,
  SAVE_ARTICLE,
  DELETE_ARTICLE,
} from '../types';

const initialState = { isLoaded: false, article: null, isUnloaded: true };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_ARTICLE_LOADED_TRUE:
      return { ...state, isLoaded: true };
    case SET_ARTICLE_LOADED_FALSE:
      return { ...state, isLoaded: false };
    case SET_ARTICLE_UNLOADED_TRUE:
      return { ...state, isUnloaded: true };
    case SET_ARTICLE_UNLOADED_FALSE:
      return { ...state, isUnloaded: false };
    case GET_ARTICLE:
      return { ...state, isLoaded: true, article: action.article };
    case SAVE_ARTICLE:
      return { ...state, article: action.article };
    case DELETE_ARTICLE:
      return initialState;
    default:
      return state;
  }
}
