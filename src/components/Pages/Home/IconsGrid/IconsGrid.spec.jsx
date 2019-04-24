// @flow

import React from 'react'
import { shallow } from 'enzyme'

import { UnwrappedIconsGrid as IconsGrid } from './IconsGrid'

describe('IconsGrid Component', () => {
  const component = shallow(<IconsGrid />)

  test('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })
})
