import { createAction } from 'redux-api-middleware';
import * as types from './types';

export const fetchAppName = (argument) => (
  createAction({
    endpoint: `https://api.someapi.org/${argument}`,
    method: 'GET',
    types: [
      types.FETCH_NAME,
      types.FETCH_NAME_SUCCESS,
      types.FETCH_NAME_ERROR
    ]
  })
);
