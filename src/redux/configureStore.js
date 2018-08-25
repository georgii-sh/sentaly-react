import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './index.reducers'

const middleware = [thunk]

if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger)
}

function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(...middleware),
      typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
        ? window.devToolsExtension()
        : f => f
    )
  )
}

export default configureStore
