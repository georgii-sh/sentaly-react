// @flow

import React from 'react'
import { shallow } from 'enzyme'
import { UnwrappedModal as Modal } from './Modal'

const mockedData = {
  title: 'test title',
  content: 'test content',
  isShown: true,
  onClose: jest.fn(),
  closeModal: jest.fn()
}

describe('Modal', () => {
  const component = shallow(<Modal {...mockedData} />)

  test('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  test('close should call closeModal from props', () => {
    component.instance().close()
    expect(mockedData.closeModal).toHaveBeenCalledTimes(1)
  })

  test('.modal-title should contains correct title', () => {
    expect(component.find('.modal-title').text()).toEqual(mockedData.title)
  })

  test('.modal-body should contains correct content', () => {
    expect(component.find('.modal-body').text()).toEqual(mockedData.content)
  })

  test('should have visible class if isShown is true', () => {
    expect(component.find('.modal').hasClass('visible')).toBeTruthy()
  })

  test('should have hiden class style if isShown is false', () => {
    component.setProps({ isShown: false })
    expect(component.find('.modal').hasClass('hiden')).toBeTruthy()
  })
})
