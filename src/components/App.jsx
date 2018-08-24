import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet'

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
        />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    )
  }
}

export default App