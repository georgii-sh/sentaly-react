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
  onChange: jest.fn(),
  onInputValidityChange: jest.fn(),
}

describe('Input Component', () => {
  const component = shallow(<Input {...mockedData} />)

  test('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  test('should contains input element', () => {
    expect(component.find('input').length).toEqual(1)
  })
})
