import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'

import Template from './template'
import App from './components/App'
import store from './redux/store'

export default function serverRenderer({ clientStats, serverStats }) {
  return (req, res, next) => {
    const context = {}
    const markup = ReactDOMServer.renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        </Provider>
    )
    const helmet = Helmet.renderStatic()

    res.status(200).send(Template({
      markup,
      helmet
    }))
  }
}