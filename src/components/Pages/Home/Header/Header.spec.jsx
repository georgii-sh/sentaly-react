// @flow

import React from 'react'
import { shallow } from 'enzyme'

import { UnwrappedHeader as Header } from './Header'

const mockedData = {
  title: 'Test title',
  text: 'Test text'
}

describe('Header Component', () => {
  const component = shallow(<Header {...mockedData} />)

  test('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  test('should display correct h1', () => {
    expect(component.find('h1').length).toEqual(1)
    expect(component.find('h1').text()).toEqual(mockedData.title)
  })

  test('should display correct text', () => {
    expect(component.find('.masthead__text').length).toEqual(1)
    expect(component.find('.masthead__text').text()).toEqual(mockedData.text)
  })
})
