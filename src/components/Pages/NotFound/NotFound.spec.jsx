// @flow

import React from 'react'
import { shallow } from 'enzyme'

import NotFound from './NotFound'

describe('NotFound Component', () => {
  const component = shallow(<NotFound />)

  test('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })
})
