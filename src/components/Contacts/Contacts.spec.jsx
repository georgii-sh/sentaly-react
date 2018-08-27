// @flow

import React from 'react'
import { shallow } from 'enzyme'

import { UnwrappedContacts as Contacts } from './Contacts'

const mockedData = {
  isLoading: false,
  isFormSent: false,
  error: '',
  sendContactUsForm: jest.fn()
}

describe('Contacts Component', () => {
  const component = shallow(<Contacts {...mockedData} />)

  test('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  test('should have correct inputs', () => {
    expect(component.find('#firstName').length).toEqual(1)
    expect(component.find('#lastName').length).toEqual(1)
    expect(component.find('#email').length).toEqual(1)
    expect(component.find('#phone').length).toEqual(1)
    expect(component.find('#message').length).toEqual(1)
  })
})
