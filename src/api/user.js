import { baseURL, getResponse } from './utils';

function authUser(body) {
  const URL = `${baseURL}/users/login`;
  return getResponse(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(body),
  });
}

function registerUser(body) {
  const URL = `${baseURL}/users`;
  return getResponse(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(body),
  });
}

function updateUser(body, token) {
  const URL = `${baseURL}/user`;
  return getResponse(URL, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json;charset=utf-8', authorization: `Token ${token}` },
    body: JSON.stringify(body),
  });
}

export { authUser, registerUser, updateUser };
