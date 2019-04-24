// @flow

import React from 'react'
import { shallow } from 'enzyme'
import Form from './Form'

const mockedData = {
  firstName: 'firstName',
  lastName: 'lastName',
  phone: 'phone',
  email: 'email@email.com',
  message: 'message',
  isLoading: false,
  isSubmitDisabled: false,
  onInputChange: jest.fn(),
  onSubmit: jest.fn(),
  onInputValidityChange: jest.fn(),
  validation: {
    firstName: true,
    email: true,
    message: true
  }
}

describe('Form', () => {
  let component

  beforeEach(() => {
    component = shallow(<Form {...mockedData} />)
  })

  test('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  test('should contains correct inputs', () => {
    expect(component.find('#firstName').length).toEqual(1)
    expect(component.find('#lastName').length).toEqual(1)
    expect(component.find('#email').length).toEqual(1)
    expect(component.find('#phone').length).toEqual(1)
    expect(component.find('#message').length).toEqual(1)
  })

  test('onInputChange should call onInputChange from props', () => {
    component.instance().onInputChange('testId', 'testValue')
    expect(mockedData.onInputChange).toHaveBeenCalledTimes(1)
    expect(mockedData.onInputChange).toHaveBeenCalledWith('testId', 'testValue')
  })

  test('submit should call onSubmit from props', () => {
    component.instance().submit()
    expect(mockedData.onSubmit).toHaveBeenCalledTimes(1)
  })

  test('onInputValidityChange should call onInputValidityChange from props', () => {
    component.instance().onInputValidityChange('email', false)
    expect(mockedData.onInputValidityChange).toHaveBeenCalledTimes(1)
    expect(mockedData.onInputValidityChange).toHaveBeenCalledWith('email', false)
  })

  test('submitButton should show correct loading state if isLoading is false', () => {
    expect(component.find('#submitButton').text()).toEqual('Submit')
    expect(component.find('#submitButton').hasClass('sending')).toBeFalsy()
  })

  test('submitButton should show correct loading state if isLoading is true', () => {
    component.setProps({ isLoading: true })
    expect(component.find('#submitButton').text()).toEqual('Submiting...')
    expect(component.find('#submitButton').hasClass('sending')).toBeTruthy()
  })

})
