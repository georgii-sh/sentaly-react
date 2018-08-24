// @flow

import React from 'react'
import { shallow } from 'enzyme'

import IconsGrid from './IconsGrid'

const mockedData = {

}

describe('IconsGrid Component', () => {
  const component = shallow(<IconsGrid {...mockedData} />)

  test('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })
})
