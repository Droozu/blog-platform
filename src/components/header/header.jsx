import React from 'react';
import { Link } from 'react-router-dom';
import UserNav from '../user-nav';
import styles from './header.module.scss';

function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <Link to="/articles">
          <h1 className={styles.title}>Realworld Blog</h1>
        </Link>
        <UserNav />
      </div>
    </header>
  );
}

export default Header;
