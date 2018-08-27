// @flow

import moxios from 'moxios'

import sendContactUsForm from './ContactUs.actionCreators'

describe('ContactUs actions', () => {
  
  const params = {
    firstName: 'firstName',
    lastName: 'lastName',
    phone: 'phone',
    email: 'email@email.com',
    message: 'message'
  }

  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it('sendContactUsForm should dispatch CONTACT_US_LOADING', (done: Function) => {
    const dispatchMock = jest.fn()
    sendContactUsForm(params)(dispatchMock)
    expect(dispatchMock).toBeCalledWith({ type: 'CONTACT_US_LOADING' })
    done()
  })

  it('sendContactUsForm should dispatch CONTACT_US_SET_ERROR on error', (done: Function) => {
    const dispatchMock = jest.fn()
    moxios.withMock(() => {
      sendContactUsForm(params)(dispatchMock)
      moxios.wait(() => {
        const request = moxios.requests.mostRecent()
        request.respondWith({ status: 400, response: { error: 'test error' } }).then(() => {
          expect(dispatchMock).toBeCalledWith(
            { type: 'CONTACT_US_SET_ERROR', payload: { error: 'test error' } }
          )
          done()
        })
      })
    })
  })

  it('dispatchMock should dispatch CONTACT_US_SUCCESS on success', (done: Function) => {
    const dispatchMock = jest.fn()
    moxios.withMock(() => {
      sendContactUsForm(params)(dispatchMock)
      moxios.wait(() => {
        const request = moxios.requests.mostRecent()
        request.respondWith({ status: 200, response: { success: true } })
          .then(() => {
            expect(dispatchMock).toBeCalledWith({ type: 'CONTACT_US_SUCCESS' })
            done()
          })
      })
    })
  })

})
