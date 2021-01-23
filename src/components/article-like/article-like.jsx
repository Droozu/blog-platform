import React, { useState } from 'react';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import PropTypes from 'prop-types';
import useAuth from '../../hooks/useAuth';
import { likeArticle, unlikeArticle } from '../../api/article';
import styles from './article-like.module.scss';

export default function ArticleLike({ slug, favorited, counter }) {
  const [isAuth, token] = useAuth();
  const [like, setLike] = useState(favorited);
  const [likeCounter, setLikeCounter] = useState(counter);

  function handleLike() {
    if (isAuth) {
      setLike((state) => !state);

      if (like) {
        unlikeArticle(slug, token);
        setLikeCounter((state) => state - 1);
      } else {
        likeArticle(slug, token);
        setLikeCounter((state) => state + 1);
      }
    }
  }

  const likedHeart = <HeartFilled style={{ fontSize: '16px', color: '#ff0707' }} />;
  const unlikedHeart = <HeartOutlined style={{ fontSize: '16px' }} />;

  return (
    <div className={styles.wrapper}>
      <button className={styles.button} type="button" onClick={handleLike}>
        {like ? likedHeart : unlikedHeart}
      </button>
      <span>{likeCounter}</span>
    </div>
  );
}

ArticleLike.propTypes = {
  slug: PropTypes.string.isRequired,
  favorited: PropTypes.bool.isRequired,
  counter: PropTypes.number.isRequired,
};
