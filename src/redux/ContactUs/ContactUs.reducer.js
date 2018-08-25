// @flow

type State = {
  error: string,
  isLoading: boolean,
  isFormSent: boolean
}

type Action = {
  type: string,
  payload: State
}

const DEFAULT_STATE = {
  error: '',
  isLoading: false,
  isFormSent: false
}

export default (state: State = DEFAULT_STATE, action: Action) => {
  switch (action.type) {
    case 'CONTACT_US_LOADING':
      return Object.assign({}, state, { error: '', isLoading: true, isFormSent: false })
    case 'CONTACT_US_SUCCESS':
      return Object.assign({}, state, { error: '', isLoading: false, isFormSent: true })
    case 'CONTACT_US_SET_ERROR':
      return Object.assign({}, state, { error: action.payload.error, isLoading: false, isFormSent: false })
    default:
      return state
  }
}
