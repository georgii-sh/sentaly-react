import React from 'react';
import Helmet from 'react-helmet'
import { renderRoutes } from 'react-router-config'

import routes from './routes'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Modal } from './shared'


class App extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          htmlAttributes={{ lang: 'en', amp: undefined }}
          titleTemplate="%s - Sentaly technologies"
          titleAttributes={{ itemprop: 'name', lang: 'en' }}
          meta={[
            { name: 'description', content: 'Sentaly technologies website' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          ]}
          link={[
            { rel: 'icon', type: 'image/png', href: '/assets/icons/favicon-32x32.png', sizes: '32x32' },
            { rel: 'icon', type: 'image/png', href: '/assets/icons/favicon-16x16.png', sizes: '16x16' },
            { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600' },
            { rel: 'stylesheet', type: 'text/css', href: '/assets/styles/_normalize.css' },
            { rel: 'stylesheet', type: 'text/css', href: '/assets/styles/_simple-line-icons.css' }
          ]}
        />
        <Header title="Sentaly technologies" />
        <Modal />
        {renderRoutes(routes)}
        <Footer />
      </div>
    )
  }
}

export default App