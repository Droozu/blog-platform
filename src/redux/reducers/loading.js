import { LOADING_START, LOADING_STOP } from '../types';

const initialState = false;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_START:
      return true;
    case LOADING_STOP:
      return false;
    default:
      return state;
  }
}
