// @flow

import React from 'react'
import { shallow } from 'enzyme'
import { UnwrappedHeader as Header } from './Header'

const mockedData = {
  title: 'Test title'
}

describe('Header', () => {
  const component = shallow(<Header {...mockedData} />)

  test('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  test('should display correct title', () => {
    expect(component.find('.navbar-brand').length).toEqual(1)
    expect(component.find('.navbar-brand').text()).toEqual(mockedData.title)
  })
})
