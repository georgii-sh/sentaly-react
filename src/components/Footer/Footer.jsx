// @flow

import React from 'react'
import { Link } from 'react-router-dom'
import withStyles from 'isomorphic-style-loader/withStyles'

import { bs4 } from '../shared'
import styles from './Footer.scss'
import copyright from './items'

class Footer extends React.PureComponent<{}> {

  scrollTop() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <footer className={[styles.footer, bs4['bg-dark']].join(' ')}>
        <div className={bs4.container}>
          <div className={bs4.row}>
            <div className={[bs4['col-lg-6'], bs4['h-100'], bs4['text-center'], bs4['text-lg-left'], bs4['my-auto']].join(' ')}>
              <ul className={[bs4['list-inline'], bs4['mb-2']].join(' ')}>
                <li className={bs4['list-inline-item']}>
                  <Link to="/" href="/" onClick={this.scrollTop}>About</Link>
                </li>
                <li className={bs4['list-inline-item']}>&sdot;</li>
                <li className={bs4['list-inline-item']}>
                  <Link to="/contacts" href="/contacts" onClick={this.scrollTop}>Contact Us</Link>
                </li>
              </ul>
              <p className={[bs4['text-muted'], bs4.small, bs4['mb-4'], bs4['mb-lg-0']].join(' ')}>
                &copy; {copyright} All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default withStyles(bs4, styles)(Footer)
