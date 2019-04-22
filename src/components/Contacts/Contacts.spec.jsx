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

  test('onInputChange should set correct state', () => {
    component.instance().onInputChange('testId', 'testValue')
    expect(component.state().testId).toEqual('testValue')
  })

  test('should show success modal if isFormSent is updated', () => {
    const setModal = jest.fn()
    component.setProps({ setModal })
    component.instance().componentWillUpdate({ isFormSent: true })
    expect(setModal).toHaveBeenCalledTimes(1)
    expect(setModal).toHaveBeenCalledWith('Success', 'Thank you for your message')
  })

  test('should show success modal if error is updated', () => {
    const setModal = jest.fn()
    component.setProps({ setModal })
    component.instance().componentWillUpdate({ error: 'error text' })
    expect(setModal).toHaveBeenCalledTimes(1)
    expect(setModal).toHaveBeenCalledWith('Error', 'error text')
  })

  test('submit should call sendContactUsForm from props', () => {
    component.instance().submit()
    expect(mockedData.sendContactUsForm).toHaveBeenCalledTimes(1)
  })

})
