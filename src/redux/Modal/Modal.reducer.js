// @flow

type State = {
  isShown?: boolean,
  data?: {}
}

type Action = {
  type: string,
  payload?: {
    content: string,
    title: string
  }
}

const INITIAL_STATE = {
  isShown: false,
  data: {}
}

const ModalReducer = (state: State = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case 'SET_MODAL':
      if (action.payload) {
        const { content, title } = action.payload
        return Object.assign({}, state, { isShown: true, content, title })
      }
      return state
    case 'CLOSE_MODAL':
      return Object.assign({}, state, { isShown: false })
    default:
      return state
  }
}

export default ModalReducer
