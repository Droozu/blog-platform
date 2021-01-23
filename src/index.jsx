import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers/index';
import { saveUser } from './redux/actions/user';
import App from './components/app';
import 'antd/dist/antd.css';
import './index.scss';

const getUserFromLocalStorage = () => JSON.parse(localStorage.getItem('user')) || null;

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const user = getUserFromLocalStorage();
if (user) store.dispatch(saveUser(user));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
