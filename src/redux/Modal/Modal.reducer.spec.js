// @flow

import reducers from './Modal.reducer'

test('SET_MODAL', () => {
  const state = reducers(
    {},
    {
      type: 'SET_MODAL',
      payload: {
        type: 'test',
        data: {}
      }
    }
  )
  expect(state).toEqual({
    type: 'test',
    data: {}
  })
})
