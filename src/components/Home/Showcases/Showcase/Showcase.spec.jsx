// @flow

import React from 'react'
import { shallow } from 'enzyme'

import Showcase from './Showcase'

const mockedData = {

}

describe('Showcase Component', () => {
  const component = shallow(<Showcase {...mockedData} />)

  test('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })
})
