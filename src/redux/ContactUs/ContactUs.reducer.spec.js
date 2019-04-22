// @flow

import reducers from './ContactUs.reducer'

describe('ContactUs reducer', () => {

  test('CONTACT_US_LOADING', () => {
    const state = reducers(
      { 
        error: 'test',
        isLoading: false,
        isFormSent: false
      },
      { type: 'CONTACT_US_LOADING'}
    )
    expect(state).toEqual({ error: '', isLoading: true, isFormSent: false })
  })

  test('CONTACT_US_SUCCESS', () => {
    const state = reducers(
      { 
        error: '',
        isLoading: false,
        isFormSent: false 
      },
      { type: 'CONTACT_US_SUCCESS' }
    )
    expect(state).toEqual({ error: '', isLoading: false, isFormSent: true })
  })

  test('CONTACT_US_SET_ERROR', () => {
    const state = reducers(
      { 
        error: '',
        isLoading: true,
        isFormSent: false
      },
      { type: 'CONTACT_US_SET_ERROR', payload: { error: 'test error' } }
    )
    expect(state).toEqual({ error: 'test error', isLoading: false, isFormSent: false })
  })

})