// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'

import { bs4 } from '../../../../shared'
import styles from './Icon.scss'

type Props = {
  icon: string,
  title: string,
  text: string
}

class Icon extends React.PureComponent<Props> {

  render() {
    const { icon, title, text } = this.props
    return (
      <div className={[styles.item, bs4['mx-auto mb-5'], bs4['mb-lg-0'], bs4['mb-lg-3']].join(' ')}>
        <div className={[styles.item__icon, bs4['d-flex']].join(' ')}>
          <i className={[bs4['m-auto'], icon].join(' ')} />
        </div>
        <h3>{title}</h3>
        <p className={[bs4.lead, bs4['mb-0']].join(' ')}>{text}</p>
      </div>
    )
  }
}

export default withStyles(bs4, styles)(Icon)
