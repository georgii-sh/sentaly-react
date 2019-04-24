// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'

import { bs4 } from '../../../shared'
import styles from './Showcases.scss'

import items from './items'
import Showcase from './Showcase/Showcase'


function Showcases() {
  return (
    <section className={styles.showcase}>
      <div className={[bs4['container-fluid'], bs4['p-0']].join(' ')}>
        {items.map(item => <Showcase key={item.title} {...item} />)}
      </div>
    </section>
  )
}

export const UnwrappedShowcases = Showcases

export default withStyles(bs4, styles)(Showcases)
