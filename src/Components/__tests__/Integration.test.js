import React from 'react';
import { mount } from 'enzyme';
import App from '../../App';

test('searching for a query returns books', async () => {
  let wrapper = mount(<App />);
  wrapper.find('.Search-input').instance().value = 'harry potter';
  wrapper.find('#submit').simulate('click');
  await (wrapper, w => w.find('.bookResult').exists());
});
