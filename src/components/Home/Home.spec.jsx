// @flow

import React from 'react'
import { shallow } from 'enzyme'

import Home from './Home'

const mockedData = {

}

describe('Home Component', () => {
  const component = shallow(<Home {...mockedData} />)

  test('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })
})
