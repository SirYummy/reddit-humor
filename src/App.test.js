import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'code';
import App from './App';

describe('<App/>', () => {

  let appEl;
  
  beforeEach(() => {
    appEl = shallow(<App />)
  })
  
  it('returns a function', () => {
    expect(appEl.type()).to.be.a.function();
  })
  
})
