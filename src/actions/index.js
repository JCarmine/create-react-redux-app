import { createAction } from 'redux-api-middleware';
import * as types from './types';

export const fetchAppName = () => (
  createAction({
    endpoint: `https://randomuser.me/api/`,
    method: 'GET',
    types: [
      types.FETCH_APP_NAME,
      types.FETCH_APP_NAME_SUCCESS,
      types.FETCH_APP_NAME_ERROR
    ]
  })
);
