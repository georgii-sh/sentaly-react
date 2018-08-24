// @flow

import React from 'react'
import { shallow } from 'enzyme'

import Showcases from './Showcases'

const mockedData = {

}

describe('Showcases Component', () => {
  const component = shallow(<Showcases {...mockedData} />)

  test('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })
})
