// @flow

import React from 'react'
import { shallow } from 'enzyme'

import Input from './Input'

const mockedData = {

}

describe('Input Component', () => {
  const component = shallow(<Input {...mockedData} />)

  test('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })
})
