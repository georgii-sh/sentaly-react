// @flow

import reducers from './Modal.reducer'

describe('Modal reducer', () => {

  test('default', () => {
    const state = reducers({ test: 'test' }, { type: 'TEST' })
    expect(state).toEqual({ test: 'test' })
  })

  test('SET_MODAL', () => {
    const state = reducers(
      {},
      {
        type: 'SET_MODAL',
        payload: {
          content: 'content test',
          title: 'title test'
        }
      }
    )
    expect(state).toEqual({ isShown: true, content: 'content test', title: 'title test' })
  })

  test('SET_MODAL no payload', () => {
    const state = reducers(
      {
        isShown: false
      },
      {
        type: 'SET_MODAL'
      }
    )
    expect(state).toEqual({ isShown: false })
  })

  test('CLOSE_MODAL', () => {
    const state = reducers({ isShown: true }, { type: 'CLOSE_MODAL' })
    expect(state).toEqual({ isShown: false })
  })

})
