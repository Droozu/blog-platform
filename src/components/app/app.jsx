import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Header from '../header';
import ArticleListPage from '../pages/article-list-page';
import ArticlePage from '../pages/article-page';
import NewArticlePage from '../pages/new-article-page';
import EditArticlePage from '../pages/edit-article-page';
import SignInPage from '../pages/sign-in-page';
import SignUpPage from '../pages/sign-up-page';
import ProfilePage from '../pages/profile-page';
import styles from './app.module.scss';

function App() {
  const [isAuth] = useAuth();

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.body}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/articles" />
          </Route>
          <Route exact path="/articles">
            <ArticleListPage />
          </Route>
          <Route exact path="/articles/:slug">
            <ArticlePage />
          </Route>
          <Route path="/articles/:slug/edit">
            <EditArticlePage />
          </Route>
          <Route path="/new-article">{isAuth ? <NewArticlePage /> : <Redirect to="/sign-In" />}</Route>
          <Route path="/sign-In">
            <SignInPage />
          </Route>
          <Route path="/sign-up">
            <SignUpPage />
          </Route>
          <Route path="/profile">{isAuth ? <ProfilePage /> : <Redirect to="/sign-In" />}</Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
