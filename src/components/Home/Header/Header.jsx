// @flow

import React from 'react'

import { bs4 } from '../../shared'
import styles from './Header.scss'

type Props = {
  title: string,
  text: string
}

class Header extends React.PureComponent<Props> {

  render() {
    return (
      <header className={[styles.masthead, bs4['text-white']].join(' ')}>
        <div className={styles.masthead__overlay} />
        <div className={bs4.container}>
          <div className={bs4.row}>
            <div className={[bs4['col-xl-9'], bs4['mx-auto']].join(' ')}>
              <h1 className={bs4['mb-3']}>{this.props.title}</h1>
            </div>
            <div className={[bs4['col-md-10'], bs4['col-lg-8'], bs4['col-xl-7'], bs4['mx-auto'], styles.masthead__text].join(' ')}>
              {this.props.text}
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
