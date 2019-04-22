// @flow

import React from 'react'
import { shallow } from 'enzyme'

import Status from './Status'

const mockedData = {
  code: 404,
  children: '' 
}

describe('Input Component', () => {
  const component = shallow(<Status {...mockedData} />)

  test('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })
})
