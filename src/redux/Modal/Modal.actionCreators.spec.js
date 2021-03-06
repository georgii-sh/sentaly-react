// @flow
import { setModal, closeModal } from './Modal.actionCreators'

describe('Modal actions', () => {

  it('setModal should return correct value', () => {
    const result = setModal('test-title', 'test-content')
    expect(result).toEqual({
      type: 'SET_MODAL',
      payload: {
        title: 'test-title',
        content: 'test-content'
      }
    })
  })

  it('setModal should return correct value', () => {
    const result = closeModal()
    expect(result).toEqual({
      type: 'CLOSE_MODAL',
    })
  })

})
