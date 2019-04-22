// @flow

import React from 'react'
import { shallow } from 'enzyme'

import Status from './Status'

const mockedData = {
  code: 404,
  children: 'test children' 
}

describe('Input Component', () => {
  const component = shallow(<Status {...mockedData} />)

  test('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  test('updateStatusCode should set correct status', () => {
    const context = {
      staticContext: {
        status: 200
      }
    }
    component.instance().updateStatusCode(context)
    expect(context.staticContext.status).toEqual(404)
  })

  test('updateStatusCode should return children from props', () => {
    const context = {
      staticContext: {
        status: 200
      }
    }
    expect(component.instance().updateStatusCode(context)).toEqual('test children')
  })
})
