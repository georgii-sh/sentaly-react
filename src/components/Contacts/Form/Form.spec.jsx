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
  onSubmit: jest.fn()
}

describe('Form', () => {
  const component = shallow(<Form {...mockedData} />)

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

})
