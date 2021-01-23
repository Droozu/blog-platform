import {
  SET_ARTICLE_LOADED_TRUE,
  SET_ARTICLE_LOADED_FALSE,
  SET_ARTICLE_UNLOADED_FALSE,
  SET_ARTICLE_UNLOADED_TRUE,
  GET_ARTICLE,
  SAVE_ARTICLE,
  DELETE_ARTICLE,
} from '../types';
import * as Article from '../../api/article';

const setArticleLoadedTrue = () => ({ type: SET_ARTICLE_LOADED_TRUE });
const setArticleLoadedFalse = () => ({ type: SET_ARTICLE_LOADED_FALSE });
const setArticleUnloadedTrue = () => ({ type: SET_ARTICLE_UNLOADED_TRUE });
const setArticleUnloadedFalse = () => ({ type: SET_ARTICLE_UNLOADED_FALSE });

const getArticle = (slug, token) => (dispatch) => {
  Article.getArticle(slug, token).then((json) => dispatch({ type: GET_ARTICLE, article: json.article }));
};

function handleNewArticle(json, dispatch, history, setError) {
  if (json.article) {
    const { article } = json;
    dispatch({ type: SAVE_ARTICLE, article });
    history.push(`/articles/${article.slug}`);
  }

  if (json.errors) {
    dispatch(setArticleUnloadedTrue());
    const { errors } = json;
    Object.keys(errors).forEach((key) => {
      errors[key].forEach((error) => setError(key, { message: error }));
    });
  }
}

const createArticle = (body, token, history, setError) => (dispatch) => {
  Article.createArticle(body, token).then((json) => handleNewArticle(json, dispatch, history, setError));
};

const editArticle = (slug, body, token, history, setError) => (dispatch) => {
  Article.editArticle(slug, body, token).then((json) => handleNewArticle(json, dispatch, history, setError));
};

const deleteArticle = (slug, token) => (dispatch) => {
  Article.deleteArticle(slug, token).then(() => dispatch({ type: DELETE_ARTICLE }));
};

export {
  getArticle,
  setArticleLoadedTrue,
  setArticleLoadedFalse,
  createArticle,
  editArticle,
  deleteArticle,
  setArticleUnloadedTrue,
  setArticleUnloadedFalse,
};
