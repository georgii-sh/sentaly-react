// @flow

type State = {
  isShown: boolean,
  data: {}
}

type Action = {
  type: string,
  payload: State
}

const INITIAL_STATE = {
  isShown: false,
  title: '',
  content: ''
}

const ModalReducer = (state: State = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case 'SET_MODAL':
      return Object.assign({}, state, { isShown: true, content: action.payload.content, title: action.payload.title })
    case 'CLOSE_MODAL':
      return Object.assign({}, state, { isShown: false })
    default:
      return state
  }
}

export default ModalReducer
