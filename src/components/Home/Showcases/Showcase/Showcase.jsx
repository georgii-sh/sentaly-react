// @flow

import React from 'react'

import { bs4 } from '../../../shared'
import styles from '../Showcases.scss'

type Props = {
  image: string,
  title: string,
  text: string,
  isImageFirst: boolean
}

class Showcase extends React.PureComponent<Props> {

  render() {
    return  (
      <div className={[bs4.row, bs4['no-gutters']].join(' ')}>
        <div
          className={[
            bs4['col-lg-6'], 
            this.props.isImageFirst ? bs4['order-lg-1'] : bs4['order-lg-2'], 
            bs4['text-white'], 
            styles.showcase__image
          ].join(' ')}
          style={{ backgroundImage: `url(${this.props.image})` }} />

        <div className={[
            bs4['col-lg-6'], 
            this.props.isImageFirst ? bs4['order-lg-2'] : bs4['order-lg-1'], 
            bs4['my-auto'], 
            styles.showcase__text
          ].join(' ')}>
          <h2>{this.props.title}</h2>
          <p className={[bs4.lead, bs4[' mb-0']].join(' ')}>{this.props.text}</p>
        </div>
      </div>
    )
  }
}

export default Showcase
