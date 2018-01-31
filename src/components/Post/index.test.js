import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import Post from './index'
import PostProps from './index.props'
import PostChildren from './index.children'

describe('<Post/>', () => {

    describe('when mounted', () => {
        
        let wrapper
        
        beforeEach(() => {   
            wrapper = mount(<Post {...PostProps} />)
        })

        afterEach(() => {
           wrapper.unmount()
        })

        PostChildren.map((child) => {
            it(`should render ${child.count} ${child.name} child component/s`, () => {
                expect(wrapper.find(child.name)).to.have.length(child.count)
            })
        })
        
    })

})