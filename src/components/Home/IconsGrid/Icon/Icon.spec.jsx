// @flow

import React from 'react'
import { shallow } from 'enzyme'

import Icon from './Icon'

const mockedData = {
  icon: 'icon-test',
  title: 'title-test',
  text: 'text-test'
}

describe('Icon Component', () => {
  const component = shallow(<Icon {...mockedData} />)

  test('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  test('should display correct icon', () => {
    expect(component.find(`.${mockedData.icon}`).length).toEqual(1)    
  })

  test('should display correct title', () => {
    expect(component.find('h3').length).toEqual(1)
    expect(component.find('h3').text()).toEqual(mockedData.title)
  })

  test('should display correct text', () => {
    expect(component.find('p.lead').length).toEqual(1)
    expect(component.find('p.lead').text()).toEqual(mockedData.text)
  })
})
