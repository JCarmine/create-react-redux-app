import { fromJS } from 'immutable';
import initialState from './initialState';
import * as types from '../actions/types';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_APP_NAME:
      return state
        .set('error', false)
        .set('loading', true);
    case types.FETCH_APP_NAME_SUCCESS:
      return state
        .set('loading', false)
        .set('name', fromJS(action.payload.results[0].name.last));
    case types.FETCH_APP_NAME_ERROR:
      return state
        .set('loading', false)
        .set('error', true);
    default:
      return state;
  }
}

export default reducer
