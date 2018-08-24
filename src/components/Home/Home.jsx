// @flow

import React from 'react'

import Header from './Header/Header'
import IconsGrid from './IconsGrid/IconsGrid'
import Showcases from './Showcases/Showcases'

type Props = {
}

class Home extends React.Component<Props> {

  render() {
    return (
      <div>
        <Header />
        <IconsGrid />
        <Showcases />
          
      </div>
    )
  }
}

export default Home
