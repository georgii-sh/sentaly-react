// @flow

import React from 'react'
import { shallow } from 'enzyme'

import Icon from './Icon'

const mockedData = {
  icon: 'icon-test',
  title: 'title-test',
  text: 'text-test'
}

describe('Icon Component', () => {
  const component = shallow(<Icon {...mockedData} />)

  test('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })
})
