// @flow

import React from 'react'

import { bs4, Input } from '../../shared'
import styles from './Form.scss'

type Props = {
  firstName: string,
  lastName: string,
  phone: string,
  email: string,
  message: string,
  isLoading: boolean,
  isSubmitDisabled: boolean,
  onInputChange: Function,
  onSubmit: Function
}

type State = {
  firstName: boolean,
  email: boolean,
  message: boolean
}

class Form extends React.PureComponent<Props, State> {

  state = {
    isfirstNameValid: true,
    isemailValid: true,
    ismessageValid: true 
  }

  onInputChange = (id: string, value: string) => {
    this.props.onInputChange(id, value)
  }

  onInputValidityChange = (id: string, isValid: boolean) => {
    this.setState({ [`is${id}Valid`]: isValid })
  }

  submit = () => {
    this.props.onSubmit()
  }

  render() {
    const { isfirstNameValid, isemailValid, ismessageValid } = this.state
    const { firstName, lastName, email, phone, message, isLoading, isSubmitDisabled } = this.props
    return (
      <form className={styles.form}>
        <div className={[bs4.row, bs4['form-group']].join(' ')}>
          <div className={[bs4['col-12'], bs4['col-md-6']].join(' ')}>
            <Input
              type="text"
              id="firstName"
              placeholder="First Name"
              isRequired
              isInvalid={!isfirstNameValid}
              value={firstName}
              onChange={this.onInputChange}
              onInputValidityChange={this.onInputValidityChange}
            />
          </div>
          <div className={[bs4['col-12'], bs4['col-md-6']].join(' ')}>
            <Input
              type="text"
              id="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={this.onInputChange}
            />
          </div>
        </div>
        <div className={[bs4.row, bs4['form-group']].join(' ')}>
          <div className={[bs4['col-12'], bs4['col-md-6']].join(' ')}>
            <Input
              type="email"
              id="email"
              isRequired
              isInvalid={!isemailValid}
              placeholder="Email Address"
              value={email}
              onChange={this.onInputChange}
              onInputValidityChange={this.onInputValidityChange}
            />
          </div>
          <div className={[bs4['col-12'], bs4['col-md-6']].join(' ')}>
            <Input
              type="text"
              id="phone"
              placeholder="Phone Number"
              value={phone}
              onChange={this.onInputChange}
            />
          </div>
        </div>
        <div className={[bs4['form-group']].join(' ')}>
          <Input
            type="textarea"
            id="message"
            isRequired
            isInvalid={!ismessageValid}
            placeholder="How can we help you?"
            value={message}
            onChange={this.onInputChange}
            onInputValidityChange={this.onInputValidityChange}
          />
        </div>
        <div className={[bs4['form-group'], bs4['text-center']].join(' ')}>
          <button
            type="button"
            id="submitButton"
            className={[bs4.btn, bs4['btn-success'], bs4['btn-lg'], isLoading ? styles.sending : ''].join(' ')}
            onClick={this.submit}
            disabled={isLoading || isSubmitDisabled}
          >
            {isLoading ? 'Submiting...' : 'Submit'}
          </button>
        </div>

      </form>
    )
  }
}

export default Form
