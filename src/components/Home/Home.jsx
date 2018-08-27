// @flow

import React from 'react'
import { Helmet } from 'react-helmet'

import Header from './Header/Header'
import IconsGrid from './IconsGrid/IconsGrid'
import Showcases from './Showcases/Showcases'

type Props = {
}

class Home extends React.Component<Props> {

  render() {
    return (
      <div>
        <Helmet title="About" />
        <Header 
          title="Sentaly Technologies Ltd."
          text="Technology is rapidly changing the way we interact, understand and influence. 
                We provide solutions, expertise and effective methodologies enabling our clients 
                to deliver exceptional value and outpace their competition."  
        />
        <IconsGrid />
        <Showcases />
          
      </div>
    )
  }
}

export default Home
