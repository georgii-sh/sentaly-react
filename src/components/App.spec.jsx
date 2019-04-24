// @flow

import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('App', () => {
  const component = shallow(<App />)

  test('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  test('should contains Header component', () => {
    expect(component.find('WithStyles(Header)').length).toEqual(1)
  })

  test('should contains Modal component', () => {
    expect(component.find('WithStyles(Connect(Modal))').length).toEqual(1)
  })

  test('should contains Footer component', () => {
    expect(component.find('WithStyles(Footer)').length).toEqual(1)
  })
})
