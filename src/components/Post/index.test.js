import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import Post from './index'
import PostChildren from './index.children'

describe('<Post/>', () => {

    describe('when mounted', () => {
        
        let wrapper
        let expectedProps = {
            show : true,
            post : {
                data : {
                    id : 'testId',
                    selftext_html : 'testSelfTextHtml',
                    preview : {
                        images : [
                            {
                                id : 'testImageId',
                                resolutions : [],
                                variants : {
                                    gif : {
                                        source : {}
                                    }
                                },
                                source : {}
                            }
                        ]
                    },
                    title : 'testPostDataTitle',
                },
                kind : 'testKind'
            },
            classes: {
                content : 'testContent',
                title : 'testTitle'
            }
        }
        
        beforeEach(() => {   
            wrapper = mount(<Post {...expectedProps} />)
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