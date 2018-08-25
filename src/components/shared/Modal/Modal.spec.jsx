// @flow

import React from 'react'
import { shallow } from 'enzyme'
import { UnwrappedModal as Modal } from './Modal'

const mockedData = {

}

describe('Modal', () => {
  const component = shallow(<Modal {...mockedData} />)

  test('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })
})
