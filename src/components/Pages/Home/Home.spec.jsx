// @flow

import React from 'react'
import { shallow } from 'enzyme'

import Home from './Home'

describe('Home Component', () => {
  const component = shallow(<Home />)

  test('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  test('should contains Header component', () => {
    expect(component.find('Header').length).toEqual(1)
  })

  test('should contains IconsGrid component', () => {
    expect(component.find('IconsGrid').length).toEqual(1)
  })

  test('should contains Showcases component', () => {
    expect(component.find('Showcases').length).toEqual(1)
  })
  
})
