import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useHistory, Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useAuthor from '../../hooks/useAuthor';
import { deleteArticle } from '../../redux/actions/article';
import Button from '../button';
import styles from './article-controls.module.scss';

export default function ArticleControls() {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const [, token] = useAuth();
  const history = useHistory();
  const isAuthor = useAuthor();

  function handleDeleteButton() {
    dispatch(deleteArticle(slug, token));
    history.push('/articles');
  }

  if (!isAuthor) return null;

  return (
    <div className={styles.wrapper}>
      <Button label="Delete" size="small" theme="dangerous" onClick={handleDeleteButton} />
      <Link to={`/articles/${slug}/edit`}>
        <Button label="Edit" size="small" theme="success" />
      </Link>
    </div>
  );
}
