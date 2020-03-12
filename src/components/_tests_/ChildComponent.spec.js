import React from 'react';
import { shallow } from 'enzyme';

import ChildComponent from '../ChildComponent';

describe('<ChildComponent />', () => {
  const defaultProps = {
    fetchData: jest.fn()
  };

  const generateProps = overrides => ({
    ...defaultProps,
    ...overrides
  });

  const props = generateProps({});
  const wrapper = shallow(<ChildComponent {...props} />);

  it('renders the ...', () => {
    expect(wrapper.exists('.ChildComponent')).toBeTruthy();
  });
});
