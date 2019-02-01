import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from '../SearchBox';

describe('SearchBox Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SearchBox />);
  });
  it('should render a form input', () => {
    expect(wrapper.find('form').exists()).toBe(true);
  });
  it('should have a submit button', () => {
    expect(wrapper.find('button#submit').exists()).toBe(true);
  });
});
