// @flow

import React from 'react'
import { Link } from 'react-router-dom'

import { bs4 } from '../shared'
import styles from './Header.scss'

type Props = {
  title: string
}

class Header extends React.PureComponent<Props> {
  render() {
    return (
      <nav className={[bs4.navbar, bs4['navbar-expand-lg'], bs4['navbar-dark'], bs4['bg-dark']].join(' ')}>
        <div className={bs4.container}>
          <a className={bs4['navbar-brand']} href="/">
            <img src="/assets/icons/logo-white.png" className={styles.logo} />
            {this.props.title}
          </a>
          {/* <ul className={[bs4['navbar-nav'], bs4['mr-auto'], bs4['mt-2'], bs4['mt-lg-0']].join('')}>
            <li className={bs4['nav-item']}>
              <Link
                className={[bs4['nav-link']].join(' ')}
                to="/login"
                href=" "
              >
                  Link
              </Link>
            </li>
            <li className={bs4['nav-item']}>
              <Link
                className={[bs4['nav-link']].join(' ')}
                to="/about"
                href=" "
              >
                About
              </Link>
            </li>
          </ul> */}
        </div>
      </nav>
    )
  }
}

export default Header
