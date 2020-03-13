import { createAction } from 'redux-api-middleware';
import * as types from './types';

export const fetchData = () => (
  createAction({
    endpoint: `https://randomuser.me/api/`,
    method: 'GET',
    types: [
      types.FETCH_DATA,
      types.FETCH_DATA_SUCCESS,
      types.FETCH_DATA_ERROR
    ]
  })
);
