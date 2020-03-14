import React from 'react';
import { shallow } from 'enzyme';
import { createMockData } from '../../mocks/mockData';

import App from '../App';

describe('<App />', () => {
  const defaultProps = {
    data: null,
    isLoading: false,
    hasError: false,
    fetchData: jest.fn()
  };

  const generateProps = overrides => ({
    ...defaultProps,
    ...overrides
  });

  const props = generateProps({});
  const wrapper = shallow(<App {...props} />);

  describe('the initial state', () => {
    it('renders the title', () => {
      expect(wrapper.find('.app-title').text()).toEqual('Create React Redux App');
    });
  
    it('renders the logo', () => {
      expect(wrapper.exists('.get-started-logo')).toBeTruthy();
    });
  
    it('renders the button', () => {
      expect(wrapper.exists('.get-data-button')).toBeTruthy();
    });

    it(' does not render the loading indicator', () => {
      expect(wrapper.exists('.loading-indicator')).toBeFalsy();
    });
  });

  describe('the loading state', () => {
    const props = generateProps({ isLoading: true });
    const wrapper = shallow(<App {...props} />);

    it('renders the title', () => {
      expect(wrapper.find('.app-title').text()).toEqual('Create React Redux App');
    });
  
    it('renders the logo', () => {
      expect(wrapper.find('.get-started-logo')).toBeTruthy();
    });
  
    it('renders the button', () => {
      expect(wrapper.exists('.get-data-button')).toBeTruthy();
    });

    it('renders the loading indicator', () => {
      expect(wrapper.exists('.loading-indicator')).toBeTruthy();
    });
  });

  describe('the error state', () => {
    const props = generateProps({ hasError: true });
    const wrapper = shallow(<App {...props} />);

    it('renders the error message', () => {
      expect(wrapper.find('.app-title').text()).toContain('Error loading data from API.');
    });
  
    it('renders the logo', () => {
      expect(wrapper.find('.get-started-logo')).toBeTruthy();
    });
  
    it('renders the button', () => {
      expect(wrapper.exists('.get-data-button')).toBeTruthy();
    });

    it('renders the loading indicator', () => {
      expect(wrapper.exists('.loading-indicator')).toBeFalsy();
    });
  });

});
