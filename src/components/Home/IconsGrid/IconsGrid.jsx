// @flow

import React from 'react'

import { bs4 } from '../../shared'
import styles from './IconsGrid.scss'

import items from './items'
import Icon from './Icon/Icon'

type Props = {
}

class IconsGrid extends React.PureComponent<Props> {

  render() {
    return (
      <section className={[styles.iconsGrid, bs4['bg-light']].join(' ')}>
        <div className={bs4.container}>
          <div className={bs4.row}>
            {items.map(item => {
              return (
                <div className={bs4['col-lg-4']}>
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
