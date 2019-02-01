import React from 'react';
import { shallow } from 'enzyme';
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
    expect(shallow(<App />).find('SearchBox').length).toEqual(1);
  });
});
