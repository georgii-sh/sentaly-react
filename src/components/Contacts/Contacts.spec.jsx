// @flow

import React from 'react'
import { shallow } from 'enzyme'

import { UnwrappedContacts as Contacts } from './Contacts'

const mockedData = {

}

describe('Contacts Component', () => {
  const component = shallow(<Contacts {...mockedData} />)

  test('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })
})
