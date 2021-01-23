import { SAVE_USER, LOG_IN, LOG_OUT } from '../types';

const initialState = null;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_USER:
      return action.user;
    case LOG_IN:
      return action.user;
    case LOG_OUT:
      return initialState;
    default:
      return state;
  }
}
