import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Post } from './index'

describe('<Post/>', () => {
    
    let wrapper
    let expectedProps = {
        post : {},
        show : {}
    }
    
    beforeEach(() => {
        wrapper = shallow(<Post ...expectedProps />)
    })

    afterEach(() => {
        wrapper = undefined
    })

    describe('when shallow rendered', () => {
        it('should render a single CSSTransition child component', () => {
            expect(wrapper.find(CSSTransition)).to.have.length(1)
        })
    })

})