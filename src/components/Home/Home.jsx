import React from 'react'
import Helmet from 'react-helmet'

import styles from './Home.scss'

class Home extends React.Component {
  render() {
    return (
      <div className={styles.home}>
        <Helmet
          title="Welcome to our Homepage"
        />
        <h1>Homepage</h1>
      </div>
    )
  }
}

export default Home
