// @flow

import React from 'react'
import { Helmet } from 'react-helmet'

import Header from './Header/Header'
import IconsGrid from './IconsGrid/IconsGrid'
import Showcases from './Showcases/Showcases'

import { text, title } from './data'

type Props = {
}

class Home extends React.Component<Props> {

  render() {
    return (
      <div>
        <Helmet title="About" />
        <Header 
          title={title}
          text={text}  
        />
        <IconsGrid />
        <Showcases />
      </div>
    )
  }
}

export default Home
