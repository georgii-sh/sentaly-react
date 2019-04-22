// @flow

import React from 'react'

import { bs4 } from '../'
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

class Contacts extends React.Component<Props> {

  onInputChange = (e: any) => {
    this.props.onChange(this.props.id, e.target.value)
    this.processValidation(e.target.value)
  }

  onBlur = () => {
    this.processValidation(this.props.value)
  }

  processValidation(value) {
    if (this.props.type === 'email') {
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      const isValid = regex.test(value)
      this.props.onInputValidityChange(this.props.id, isValid)
      return
    }
    if (this.props.isRequired) {
      if (typeof this.props.onInputValidityChange === 'function') {
        this.props.onInputValidityChange(this.props.id, !!value)
      }
    }
  }
  
  render() {
    return this.props.type === 'textarea' ? 
      <textarea
        className={[bs4['form-control'], this.props.isInvalid ? styles.invalid : ''].join(' ')}
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChange={this.onInputChange}
        onBlur={this.onBlur}
        rows={5}
      /> 
      : 
      <input
        type={this.props.type || 'text'}
        className={[bs4['form-control'], this.props.isInvalid ? styles.invalid : ''].join(' ')}
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChange={this.onInputChange}
        onBlur={this.onBlur}
      />
  }
}

export default Contacts
