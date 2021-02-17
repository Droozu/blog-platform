import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { logOut } from '../../redux/actions/user';
import Username from '../username';
import Avatar from '../avatar/avatar';
import Button from '../button';
import styles from './user-nav.module.scss';

export default function UserNav() {
  const [isAuth] = useAuth();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  if (isAuth) {
    return (
      <div className={styles.wrapper}>
          <Link to="my-article">
              <Button label="My article" size="small" theme="success" />
          </Link>
        <Link to="/new-article">
          <Button label="Create article" size="small" theme="success" />
        </Link>
        <Link to="/profile">
          <div className={styles.user}>
            <Username username={user.username} />
            <Avatar avatar={user.image} />
          </div>
        </Link>
        <Link to="/">
          <Button label="Log Out" size="large" onClick={() => dispatch(logOut())} />
        </Link>
      </div>
    );
  }

  return (
    <ul className={styles.links}>
      <li>
        <Link to="/sign-in">
          <Button
            label="Sign In"
            size="large"
            border={false}
            style={{ color: 'rgba(0, 0, 0, 0.85)', borderColor: 'rgba(0, 0, 0, 0.85)' }}
          />
        </Link>
      </li>
      <li>
        <Link to="/sign-up">
          <Button label="Sign Up" size="large" theme="success" />
        </Link>
      </li>
    </ul>
  );
}
