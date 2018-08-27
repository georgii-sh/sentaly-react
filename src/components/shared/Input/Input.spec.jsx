// @flow

import React from 'react'
import { shallow } from 'enzyme'

import Input from './Input'

const mockedData = {
  id: 'test_id',
  type: 'test_type',
  placeholder: 'test_placeholder',
  value: 'test_value',
  isRequired: false,
  isInvalid: false,
  onChange: jest.fn()
}

describe('Input Component', () => {
  const component = shallow(<Input {...mockedData} />)

  test('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  test('should contains one input element', () => {
    expect(component.find('input').length).toEqual(1)
  })

  test('should contains one textarea element if type is textarea', () => {
    component.setProps({ type: 'textarea'})
    expect(component.find('input').length).toEqual(0)
    expect(component.find('textarea').length).toEqual(1)
    component.setProps({ type: 'test_type' })
  })

  test('input element should have correct props setted', () => {
    const componentProps = component.instance().render().props
    expect(componentProps.placeholder).toEqual(mockedData.placeholder)
    expect(componentProps.value).toEqual(mockedData.value)
    expect(componentProps.type).toEqual(mockedData.type)
  })

  test('onInputChange should call onChange with correct params', () => {
    component.instance().onInputChange({ target: { value: 'test_value'}})
    expect(mockedData.onChange).toHaveBeenCalledTimes(1)
    expect(mockedData.onChange).toHaveBeenCalledWith(mockedData.id, 'test_value')
  })
  
  describe('processValidation method email validation', () => {
    beforeEach(() => {
      component.setProps({ type: 'email' })
    })

    afterEach(() => {
      component.setProps({ type: 'test_type' })
    })

    test('should call onInputValidityChange with correct params if email valid', () => {
      const onInputValidityChange = jest.fn()
      component.setProps({ onInputValidityChange })
      component.instance().processValidation('email+1@valid.com')
      expect(onInputValidityChange).toHaveBeenCalledTimes(1)
      expect(onInputValidityChange).toHaveBeenCalledWith(mockedData.id, true)
    })

    test('should call onInputValidityChange with correct params if email invalid', () => {
      const onInputValidityChange = jest.fn()
      component.setProps({ onInputValidityChange })
      component.instance().processValidation('not@valid')
      expect(onInputValidityChange).toHaveBeenCalledTimes(1)
      expect(onInputValidityChange).toHaveBeenCalledWith(mockedData.id, false)
    })
  })

  describe('processValidation method isRequired validation', () => {
    beforeEach(() => {
      component.setProps({ isRequired: true })
    })

    afterEach(() => {
      component.setProps({ isRequired: false })
    })

    test('should call onInputValidityChange with correct params have value', () => {
      const onInputValidityChange = jest.fn()
      component.setProps({ onInputValidityChange })
      component.instance().processValidation('some_value')
      expect(onInputValidityChange).toHaveBeenCalledTimes(1)
      expect(onInputValidityChange).toHaveBeenCalledWith(mockedData.id, true)
    })

    test('should call onInputValidityChange with correct params have not value', () => {
      const onInputValidityChange = jest.fn()
      component.setProps({ onInputValidityChange })
      component.instance().processValidation('')
      expect(onInputValidityChange).toHaveBeenCalledTimes(1)
      expect(onInputValidityChange).toHaveBeenCalledWith(mockedData.id, false)
    })
  })
  

})
