import { fromJS } from 'immutable';
import { createMockData, createMockName } from '../../mocks/mockData';
import { getName, isLoading, hasError } from '../index';

describe('getData', () => {
  const state = fromJS({
    data: createMockData(), 
    loading: false,
    error: false
  });

  it('returns the data from the state', () => {
    expect(getName(state)).toEqual(createMockName());
  });
});

describe('isLoading', () => {
  describe('when loading data', () => {
    const state = fromJS({
      loading: true
    });

    // console.log(state)

    it('returns true', () => {
      expect(isLoading(state)).toBeTruthy();
    });
  });

  describe('when not loading data', () => {
    const state = fromJS({
      loading: false
    });

    it('returns false', () => {
      expect(isLoading(state)).toBeFalsy();
    });
  });
});

describe('hasError', () => {
  describe('when there is an error loading data', () => {
    const state = fromJS({
      error: true
    });

    it('returns true', () => {
      expect(hasError(state)).toBeTruthy();
    });
  });

  describe('when there is not an error loading data', () => {
    const state = fromJS({
      error: false
    });

    it('returns false', () => {
      expect(isLoading(state)).toBeFalsy();
    });
  });
});
