import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'

import Template from './template'
import App from './components/App'
import configureStore from './redux/configureStore'

export default function serverRenderer() {
  return (req, res, next) => {
    const context = {}
    const store = configureStore({})
    const markup = ReactDOMServer.renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        </Provider>
    )
    if (context.url) {
      return res.redirect(302, context.url)
    }
    const helmet = Helmet.renderStatic()
    const preloadedState = store.getState()
    const status = context.status || 200
    
    res.set('Cache-Control', 'public, max-age=600, s-maxage=1200')
    res.status(status).send(Template({
      markup,
      helmet,
      preloadedState
    }))
    return next()
  }
}