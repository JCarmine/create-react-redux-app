import { fromJS } from 'immutable';
import initialState from './initialState';
import * as types from '../actions/types';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_NAME:
      return state
        .setIn('error', false)
        .setIn('loading', true);
    case types.FETCH_NAME_SUCCESS:
      return state
        .setIn('loading', false)
        .setIn('name', fromJS(action.payload));
    case types.FETCH_NAME_ERROR:
      return state
        .setIn('loading', false)
        .setIn('error', true);
    default:
      return state;
  }
}

export default reducer
