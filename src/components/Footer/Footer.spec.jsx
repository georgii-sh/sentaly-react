// @flow

import React from 'react'
import { shallow } from 'enzyme'
import Footer from './Footer'

const scrollToSpy = jest.fn();
global.scrollTo = scrollToSpy

describe('Footer', () => {
  const component = shallow(<Footer />)

  test('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  test('scrollTop should call window.scrollTo', () => {
    component.instance().scrollTop()
    expect(scrollToSpy).toHaveBeenCalledTimes(1)
    expect(scrollToSpy).toHaveBeenCalledWith(0, 0)
  })
})
