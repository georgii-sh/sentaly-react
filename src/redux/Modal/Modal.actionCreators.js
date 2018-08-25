// @flow

export function setModal(title: string, content: string) {
  return {
    type: 'SET_MODAL',
    payload: { title, content }
  }
}

export function closeModal() {
  return {
    type: 'CLOSE_MODAL'
  }
}