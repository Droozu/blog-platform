import { combineReducers } from 'redux';
import loading from './loading';
import user from './user';
import article from './article';
import articleList from './article-list';

export default combineReducers({ loading, user, article, articleList });
