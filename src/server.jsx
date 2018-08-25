import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'
import { renderRoutes, matchRoutes } from 'react-router-config'

import routes from './components/routes'
import Template from './template'
import App from './components/App'
import configureStore from './redux/configureStore'

export default function serverRenderer({ clientStats, serverStats }) {
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
    const helmet = Helmet.renderStatic()
    const preloadedState = store.getState()
    res.set('Cache-Control', 'public, max-age=600, s-maxage=1200')
    res.status(200).send(Template({
      markup,
      helmet,
      preloadedState
    }))
  }
}