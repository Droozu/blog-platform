import { baseURL, getResponse } from './utils';

const ARTICLES_PER_PAGE = 10;

function getArticleList(page, token) {
  const offset = ARTICLES_PER_PAGE * (page - 1);
  const URL = `${baseURL}/articles?limit=${ARTICLES_PER_PAGE}&offset=${offset}`;
  return getResponse(URL, token && { headers: { authorization: `Token ${token}` } });
}

function getArticleByAuthorList(page, token, user) {
  const offset = ARTICLES_PER_PAGE * (page - 1);
  const URL = `${baseURL}/articles/?author=${user}&limit=${ARTICLES_PER_PAGE}&offset=${offset}`;
  return getResponse(URL, token && { headers: { authorization: `Token ${token}` } });
}

function getArticle(slug, token) {
  const URL = `${baseURL}/articles/${slug}`;
  return getResponse(URL, token && { headers: { authorization: `Token ${token}` } });
}

function createArticle(body, token) {
  const URL = `${baseURL}/articles`;
  return getResponse(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8', authorization: `Token ${token}` },
    body: JSON.stringify(body),
  });
}

function editArticle(slug, body, token) {
  const URL = `${baseURL}/articles/${slug}`;
  return getResponse(URL, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json;charset=utf-8', authorization: `Token ${token}` },
    body: JSON.stringify(body),
  });
}

function deleteArticle(slug, token) {
  const URL = `${baseURL}/articles/${slug}`;
  return getResponse(URL, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json;charset=utf-8', authorization: `Token ${token}` },
  });
}

function likeArticle(slug, token) {
  const URL = `${baseURL}/articles/${slug}/favorite`;
  return getResponse(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8', authorization: `Token ${token}` },
  });
}

function unlikeArticle(slug, token) {
  const URL = `${baseURL}/articles/${slug}/favorite`;
  return getResponse(URL, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json;charset=utf-8', authorization: `Token ${token}` },
  });
}

export { getArticleList, getArticle, createArticle, editArticle, deleteArticle, likeArticle, unlikeArticle, getArticleByAuthorList };
