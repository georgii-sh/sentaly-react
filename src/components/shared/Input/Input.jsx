// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'

import bs4 from '../bs4'
import styles from './Input.scss'

type Props = {
  id: string,
  type: string,
  placeholder: string,
  value: string,
  isRequired: boolean,
  isInvalid: boolean,
  onChange: Function,
  onInputValidityChange: Function,
}

class Input extends React.Component<Props> {

  onInputChange = (e: any) => {
    const { id, onChange } = this.props
    onChange(id, e.target.value)
    this.processValidation(e.target.value)
  }

  onBlur = () => {
    const { value } = this.props
    this.processValidation(value)
  }

  processValidation(value: string) {
    const { type, id, isRequired, onInputValidityChange } = this.props
    if (type === 'email') {
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      const isValid = regex.test(value)
      if (typeof onInputValidityChange === 'function') {
        onInputValidityChange(id, isValid)
      }
      return
    }
    if (typeof onInputValidityChange === 'function' && isRequired) {
      onInputValidityChange(id, !!value)
    }
  }
  
  render() {
    const { type, isInvalid, value, placeholder } = this.props
    return type === 'textarea' ? 
      <textarea
        className={[bs4['form-control'], isInvalid ? styles.invalid : ''].join(' ')}
        placeholder={placeholder}
        value={value}
        onChange={this.onInputChange}
        onBlur={this.onBlur}
        rows={5}
      /> 
      : 
      <input
        type={type || 'text'}
        className={[bs4['form-control'], isInvalid ? styles.invalid : ''].join(' ')}
        placeholder={placeholder}
        value={value}
        onChange={this.onInputChange}
        onBlur={this.onBlur}
      />
  }
}

export default withStyles(bs4, styles)(Input)
