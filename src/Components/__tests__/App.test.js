import React from 'react';
import { shallow, mount, render } from 'enzyme'; // eslint-disable-line no-unused-vars
import App from '../../App';

describe('App Component', () => {
  it('should render without throwing an error', () => {
    expect(
      shallow(<App />)
        .find('div.App')
        .exists()
    ).toBe(true);
  });
  it('renders a search input', () => {
    expect(shallow(<App />).find('#search').length).toEqual(1);
  });
});

describe('Search Input', () => {
  it('should respond to change event by changing the state of the App component', () => {
    const wrapper = shallow(<App />);

    wrapper
      .find('#search')
      .simulate('change', { target: { name: 'query', value: 'Harry Potter' } });
    expect(wrapper.state('query')).toEqual('Harry Potter');
  });
});
