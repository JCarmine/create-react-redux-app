import { fromJS } from 'immutable';
import initialState from 'store/initialState';
import * as types from 'constants/types';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_DATA:
      return state
        .set('error', false)
        .set('loading', true);
    case types.FETCH_DATA_SUCCESS:
      return state
        .set('loading', false)
        .set('data', fromJS(action.payload));
    case types.FETCH_DATA_ERROR:
      return state
        .set('loading', false)
        .set('error', true);
    default:
      return state;
  }
}

export default reducer
