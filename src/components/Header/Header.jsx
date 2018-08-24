// @flow

import React from 'react'
import { Link } from 'react-router-dom'

import { bs4 } from '../shared'

type Props = {
  title: string
}

class Header extends React.PureComponent<Props> {
  render() {
    return (
      <nav className={[bs4.navbar, bs4['navbar-expand-lg'], bs4['navbar-light'], bs4['bg-light']].join(' ')}>
        <div className={bs4.container}>
          <a className={bs4['navbar-brand']} href="/">{this.props.title}</a>
          <form className={[bs4['form-inline'], bs4['my-2'], bs4['my-lg-0']].join(' ')}>
            <Link 
              className={[bs4.btn, bs4['btn-outline-light'], bs4['my-2'], bs4['my-sm-0']].join(' ')}
              to="/login"
              href=" "
            >
              Login
            </Link>
          </form>
        </div>
      </nav>
    )
  }
}

export default Header
