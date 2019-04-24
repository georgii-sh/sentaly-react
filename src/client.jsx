import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import StyleContext from 'isomorphic-style-loader/StyleContext'

import App from './components/App'
import configureStore from './redux/configureStore'

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

const store = configureStore(preloadedState)

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

const insertCss = (...styles) => {
  const removeCss = styles.map(style => style._insertCss())
  return () => removeCss.forEach(dispose => dispose())
}

ReactDOM.render((
  <StyleContext.Provider value={{ insertCss }}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StyleContext.Provider>
), document.getElementById('root'))