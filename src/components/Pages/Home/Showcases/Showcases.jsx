// @flow

import React from 'react'

import { bs4 } from '../../../shared'
import styles from './Showcases.scss'

import items from './items'
import Showcase from './Showcase/Showcase'

type Props = {
}

class Showcases extends React.PureComponent<Props> {

  render() {
    return (
      <section className={styles.showcase}>
        <div className={[bs4['container-fluid'], bs4['p-0']].join(' ')}>
          {items.map(item => <Showcase key={item.title} {...item} />)}
        </div>
      </section>
    )
  }
}

export default Showcases
