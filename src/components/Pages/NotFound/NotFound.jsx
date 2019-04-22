// @flow

import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import { bs4, Status } from '../../shared'
import styles from './NotFound.scss'
import text from './data'

export default function NotFound() {
  return (
    <Status code={404}>
      <div className={[bs4.container, styles.page].join(' ')}>
        <Helmet title="Page not found" />
        <div className={styles.big}>404</div>
        <h1>{text}</h1>
        <Link to="/" href="/" className={[bs4.btn, bs4['btn-success'], bs4['btn-lg']].join(' ')}>Go to homepage</Link>
      </div>
    </Status>
  )
}