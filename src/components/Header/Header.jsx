// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'

import { bs4 } from '../shared'
import styles from './Header.scss'

type Props = {
  title: string
}

function Header({ title }: Props) {
  return (
    <nav className={[bs4.navbar, bs4['navbar-expand-lg'], bs4['navbar-dark'], bs4['bg-dark']].join(' ')}>
      <div className={bs4.container}>
        <a className={bs4['navbar-brand']} href="/">
          <img src="/assets/icons/logo-white.png" className={styles.logo} alt={title} />
          {title}
        </a>
      </div>
    </nav>
  )
}

export const UnwrappedHeader = Header

export default withStyles(bs4, styles)(Header)
