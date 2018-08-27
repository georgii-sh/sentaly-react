// @flow

import reducers from './Modal.reducer'

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
  expect(state).toEqual({
    isShown: true,
    content: 'content test',
    title: 'title test'
  })
})
