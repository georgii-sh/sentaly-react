// @flow

import React from 'react'
import { shallow } from 'enzyme'
import Footer from './Footer'

const mockedData = {

}

describe('Footer', () => {
  const component = shallow(<Footer {...mockedData} />)

  test('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })
})
