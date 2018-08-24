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
        <div classNameName={bs4.container}>
          <div classNameName={bs4.row}>
            <div className={[bs4['col-xl-9'], bs4['mx-auto']].join(' ')}>
              <h1 className={bs4['mb-5']}>Lets keep in touch!</h1>
            </div>
            <div className={[bs4['col-md-10'], bs4['col-lg-8'], bs4['col-xl-7'], bs4['mx-auto']].join(' ')}>
              <form>
                <div className={bs4['form-row']}>
                  <div className={[bs4['col-12'], bs4['col-md-9'], bs4['mb-2'], bs4['mb-md-0']].join(' ')}>
                    <input type="email" className={[bs4['form-control'], bs4['form-control-lg']].join(' ')} placeholder="Enter your email..." />
                  </div>
                  <div className={[bs4['col-12'], bs4['col-md-3']].join(' ')}>
                    <button type="submit" className={[bs4.btn, bs4['btn-block'], bs4['btn-lg'], bs4['btn-primary']].join(' ')}>Subscribe!</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
