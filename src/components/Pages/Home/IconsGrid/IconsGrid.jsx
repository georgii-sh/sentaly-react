// @flow

import React from 'react'

import { bs4 } from '../../../shared'
import styles from './IconsGrid.scss'

import { items, text } from './data'
import Icon from './Icon/Icon'

class IconsGrid extends React.PureComponent<{}> {
  render() {
    return (
      <section className={[styles.iconsGrid, bs4['bg-light']].join(' ')}>
        <div className={bs4.container}>
          <div className={styles.iconsGrid__title}>
            <div className={[bs4['col-md-10'], bs4['col-lg-8'], bs4['col-xl-7'], bs4['mx-auto']].join(' ')}>
              {text}
            </div>
          </div>
          <div className={bs4.row}>
            {items.map(item => {
              return (
                <div key={item.title} className={bs4['col-lg-4']}>
                  <Icon {...item} />
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}

export default IconsGrid
