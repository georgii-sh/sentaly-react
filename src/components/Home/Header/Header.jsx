// @flow

import React from 'react'

import { bs4 } from '../../shared'
import styles from './Header.scss'

type Props = {
}

class Header extends React.PureComponent<Props> {

  render() {
    return (
      <header className={[styles.masthead, bs4['text-white']].join(' ')}>
        <div className={styles.masthead__overlay} />
        <div className={bs4.container}>
          <div className={bs4.row}>
            <div className={[bs4['col-xl-9'], bs4['mx-auto']].join(' ')}>
              <h1 className={bs4['mb-3']}>Sentaly Technologies Ltd.</h1>
            </div>
            <div className={[bs4['col-md-10'], bs4['col-lg-8'], bs4['col-xl-7'], bs4['mx-auto']].join(' ')}>
                Technology is rapidly changing the way we interact, understand and influence. 
                We provide solutions, expertise and effective methodologies enabling our clients 
                to deliver exceptional value and outpace their competition.
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
