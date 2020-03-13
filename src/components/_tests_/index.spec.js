import React from 'react';
import { shallow } from 'enzyme';
import { createMockName } from '../../mocks/mockData';

import App from '../index';

describe('<App />', () => {
  const defaultProps = {
    name: createMockName()
  };

  const generateProps = overrides => ({
    ...defaultProps,
    ...overrides
  });

  const props = generateProps({ name: 'Sample Override'});
  const wrapper = shallow(<App {...props} />);

  it('renders the title', () => {
    expect(wrapper.exists('.appTitle')).toBeTruthy();
  });

  it('renders the logo', () => {
    expect(wrapper.find('.get-started-logo').text()).toEqual('Sample Override');
  });

  it('renders the logo', () => {
    expect(wrapper.exists('.get-started-logo')).toBeTruthy();
  });
});
