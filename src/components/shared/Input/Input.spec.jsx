// @flow

import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import Input from './Input'

const mockedData = {
  id: 'test_id',
  type: 'test_type',
  placeholder: 'test_placeholder',
  value: 'test_value',
  isRequired: false,
  isInvalid: false,
  onChange: jest.fn(),
  onInputValidityChange: jest.fn()
}

describe('Input Component', () => {
  let component

  beforeEach(() => {
    component = shallow(<Input {...mockedData} />)
  })

  test('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  test('should contains one input element if type is text', () => {
    expect(component.find('input').length).toEqual(1)
    expect(component.find('textarea').length).toEqual(0)
  })

  test('should contains one textarea element if type is textarea', () => {
    component.setProps({ type: 'textarea'})
    expect(component.find('input').length).toEqual(0)
    expect(component.find('textarea').length).toEqual(1)
    component.setProps({ type: 'text' })
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

  test('onBlur should call processValidation', () => {
    const processValidationStub = sinon.stub(Input.prototype, 'processValidation').returns(false)
    component.instance().onBlur()
    expect(processValidationStub.calledOnce).toBeTruthy()
    expect(processValidationStub.calledWith('test_value')).toBeTruthy()
    processValidationStub.restore()
  })

  test('thould set type of input to text if props.type is null', () => {
    component.setProps({ type: null })
    expect(component.find('.form-control').prop('type')).toEqual('text')
  })

  describe('input', () => {
    beforeEach(() => {
      component.setProps({ type: 'text' })
    })
    
    test('should not contains invalid class is isInvalid props is false', () => {
      expect(component.find('.form-control').hasClass('invalid')).toBeFalsy()
    })

    test('should contains invalid class is isInvalid props is true', () => {
      component.setProps({ isInvalid: true })
      expect(component.find('.form-control').hasClass('invalid')).toBeTruthy()
    })
  })

  describe('textarea', () => {
    beforeEach(() => {
      component.setProps({ type: 'textarea' })
    })

    test('should not contains invalid class is isInvalid props is false', () => {
      expect(component.find('.form-control').hasClass('invalid')).toBeFalsy()
    })

    test('should contains invalid class is isInvalid props is true', () => {
      component.setProps({ isInvalid: true })
      expect(component.find('.form-control').hasClass('invalid')).toBeTruthy()
    })
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
