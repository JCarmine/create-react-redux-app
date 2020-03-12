import React from 'react';
import { shallow } from 'enzyme';
import { createMockData } from '../../mocks/mockData';

import App from '../index';

describe('<App />', () => {
  const defaultProps = {
    data: createMockData()
  };

  const generateProps = overrides => ({
    ...defaultProps,
    ...overrides
  });

  const props = generateProps({});
  const wrapper = shallow(<App {...props} />);

  it('renders the child component', () => {
    expect(wrapper.exists('ChildComponent')).toBeTruthy();
  });
});
