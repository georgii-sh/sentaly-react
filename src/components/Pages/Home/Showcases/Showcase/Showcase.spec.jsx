// @flow

import React from 'react'
import { shallow } from 'enzyme'

import Showcase from './Showcase'

const mockedData = {
  image: '',
  title: 'test title',
  text: 'test text',
  isImageFirst: true
}

describe('Showcase Component', () => {
  const component = shallow(<Showcase {...mockedData} />)

  test('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  test('image should have order-lg-1 class if isImageFirst true', () => {
    expect(component.find('.showcase__image').hasClass('order-lg-1')).toBeTruthy()
  })

  test('text should have order-lg-2 class if isImageFirst true', () => {
    expect(component.find('.showcase__text').hasClass('order-lg-2')).toBeTruthy()
  })

  test('image should have order-lg-2 class if isImageFirst false', () => {
    component.setProps({ isImageFirst: false })
    expect(component.find('.showcase__image').hasClass('order-lg-2')).toBeTruthy()
  })

  test('text should have order-lg-1 class if isImageFirst false', () => {
    component.setProps({ isImageFirst: false })
    expect(component.find('.showcase__text').hasClass('order-lg-1')).toBeTruthy()
  })

  test('h2 should contains title from props', () => {
    expect(component.find('h2').text()).toEqual(mockedData.title)
  })

  test('p.lead should contains text from props', () => {
    expect(component.find('p.lead').text()).toEqual(mockedData.text)
  })

})
