import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import ArticleTitle from '../article-title';
import ArticleLike from '../article-like';
import ArticleTagList from '../article-tag-list';
import ArticleDescription from '../article-description';
import Username from '../username';
import ArticleDate from '../article-date';
import Avatar from '../avatar/avatar';
import ArticleControls from '../article-controls';
import styles from './article.module.scss';

export default function Article({ article, review }) {
  const containerClassName = classnames(styles.container, { [styles.container_small]: !review });
  const { slug, title, tagList, description, body, favorited, favoritesCount, author, updatedAt } = article;

  return (
    <div className={containerClassName}>
      <div className={styles.header}>
        <div className={styles.header_left}>
          <div className={styles.title}>
            <Link to={`/articles/${slug}`}>
              <ArticleTitle title={title} />
            </Link>
            <ArticleLike slug={slug} favorited={favorited} counter={favoritesCount} />
          </div>
          <ArticleTagList tagList={tagList} />
          <ArticleDescription description={description} theme={review ? 'default' : 'main'} />
        </div>
        <div className={styles.header_right}>
          <div className={styles.user}>
            <div className={styles.username}>
              <Username username={author.username} />
              <ArticleDate date={updatedAt} />
            </div>
            <Avatar avatar={author.image} />
          </div>
          {review && <ArticleControls />}
        </div>
      </div>
      {review && <ReactMarkdown className={styles.body}>{body}</ReactMarkdown>}
    </div>
  );
}

Article.defaultProps = {
  review: true,
};

Article.propTypes = {
  article: PropTypes.instanceOf(Object).isRequired,
  review: PropTypes.bool,
};
