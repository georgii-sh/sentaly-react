import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import Home from './Home/Home'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Helmet
          htmlAttributes={{ lang: "en", amp: undefined }}
          titleTemplate="%s | Sentaly technologies"
          titleAttributes={{ itemprop: "name", lang: "en" }}
          meta={[
            { name: "description", content: "Sentaly technologies website" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
          ]}
          link={[
            { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700' },
            { rel: 'stylesheet', type: 'text/css', href: '/assets/styles/normalize.css' },
            { rel: 'stylesheet', type: 'text/css', href: '/assets/styles/font-awesome.min.css' },
            { rel: 'stylesheet', type: 'text/css', href: '/assets/styles/simple-line-icons.css' },
            { rel: 'stylesheet', type: 'text/css', href: '/assets/styles/main.css' }
          ]}
        />
        <Header title="Sentaly technologies" />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App