import { fromJS } from 'immutable';
import reducer from 'reducers/index';
import * as types from 'constants/types';
import initialState from 'store/initialState.js';
import { createMockData } from 'mocks/mockData';

describe('the reducer for the App', () => {
  describe('the initial state', () => {
    it('indicates that there is no data loaded', () => {
      expect(initialState.get('data')).toBeFalsy();
    });

    it('indicates that the weather data is not loading', () => {
      expect(initialState.get('loading')).toBeFalsy();
    });

    it('indicates that there was an error loading weather data', () => {
      expect(initialState.get('error')).toBeFalsy();
    });
  });

  describe('when receiving a FETCH_DATA action', () => {
    const state = fromJS({
      error: true,
      loading: false
    });
    const action = {
      type: types.FETCH_DATA,
    };

    it('indicates that there is no data loading error', () => {
      const nextState = reducer(state, action);
      expect(nextState.get('error')).toBeFalsy();
    });

    it('indicates that the data is loading', () => {
      const nextState = reducer(state, action);
      expect(nextState.get('loading')).toBeTruthy();
    });
  });

  describe('when receiving a FETCH_DATA_SUCCESS action', () => {
    const mockData = createMockData();
    const state = fromJS({
      data: null,
      loading: true
    });
    const action = {
      type: types.FETCH_DATA_SUCCESS,
      payload: mockData
    };

    it('adds the results to the state', () => {
      const nextState = reducer(state, action);
      expect(nextState.get('data').toJS()).toEqual(mockData);
    });

    it('indicates that the data is not loading', () => {
      const nextState = reducer(state, action);
      expect(nextState.get('loading')).toBeFalsy();
    });
  });

  describe('when receiving a FETCH_DATA_ERROR action', () => {
    const state = fromJS({
      loading: true,
      error: false
    });
    const action = {
      type: types.FETCH_DATA_ERROR
    };

    it('indicates that the data is not loading', () => {
      const nextState = reducer(state, action);
      expect(nextState.get('loading')).toBeFalsy();
    });

    it('indicates that there was an error loading the data', () => {
      const nextState = reducer(state, action);
      expect(nextState.get('error')).toBeTruthy();
    });
  });
});
