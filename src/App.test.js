import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import App from './App';

describe('<App/>', () => {

  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<App />)
  })
  
  it('returns a function', () => {
    expect(wrapper.type()).to.be.a('function');
  })
  
})