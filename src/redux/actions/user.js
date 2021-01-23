import { SAVE_USER, DELETE_USER, LOG_IN, LOG_OUT } from '../types';

const saveUser = (user) => ({ type: SAVE_USER, user });

const updateUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
  return saveUser(user);
};

const deleteUser = () => {
  localStorage.removeItem('user');
  return { type: DELETE_USER };
};

const logIn = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
  return { type: LOG_IN, user };
};

const logOut = () => {
  localStorage.removeItem('user');
  return { type: LOG_OUT };
};

export { saveUser, updateUser, deleteUser, logIn, logOut };
