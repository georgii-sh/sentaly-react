// @flow

import React from 'react'

import { bs4, Input } from '../shared'
import styles from './Contacts.scss'

type Props = {
}

type State = {
  firstName: string,
  lastName: string,
  phone: string,
  email: string,
  message: string
}

class Contacts extends React.Component<Props, State> {

  constructor(props: Props){
    super(props)
    this.onInputChange = this.onInputChange.bind(this)
    this.onMessageChange = this.onMessageChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  state = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  }

  onInputChange(id: string, value: string) {
    this.setState({ [id]: value })
  }

  onMessageChange(e: any) {
    this.setState({ message: e.target.value })
  }

  submit() {

  }

  render() {
    return (
      <div className={[bs4.container, styles.contacts].join(' ')}>
        <h1>Let’s Talk!</h1>
        <div className={[bs4['text-muted'], bs4['col-md-10'], bs4['col-lg-8'], bs4['col-xl-7'], bs4['mx-auto']].join(' ')}>
          Have a project idea or general inquiry? Please don’t hesitate to ask us - we will
          contact you as soon as possible.
        </div>

        <form className={styles.contacts__form}>
          <div className={[bs4.row, bs4['form-group']].join(' ')}>
            <div className={[bs4['col-12'], bs4['col-md-6']].join(' ')}>
              <Input 
                type="text" 
                id="firstName"
                placeholder="First Name" 
                value={this.state.firstName} 
                onChange={this.onInputChange}
              />
            </div>
            <div className={[bs4['col-12'], bs4['col-md-6']].join(' ')}>
              <Input 
                type="text" 
                id="lastName"
                placeholder="Last Name" 
                value={this.state.lastName} 
                onChange={this.onInputChange}
              />
            </div>
          </div>
          <div className={[bs4.row, bs4['form-group']].join(' ')}>
            <div className={[bs4['col-12'], bs4['col-md-6']].join(' ')}>
              <Input 
                type="email"
                id="email"
                placeholder="Email Address" 
                value={this.state.email} 
                onChange={this.onInputChange}
              />
            </div>
            <div className={[bs4['col-12'], bs4['col-md-6']].join(' ')}>
              <Input 
                type="text" 
                id="phone"
                placeholder="Phone Number" 
                value={this.state.phone} 
                onChange={this.onInputChange}
              />
            </div>
          </div>
          <div className={[bs4['form-group']].join(' ')}>
            <textarea 
              className={bs4['form-control']} 
              placeholder="How can we help you?" 
              rows="5" 
              value={this.state.message} 
              onChange={this.onMessageChange}
            />
          </div>
          <div className={[bs4['form-group'], bs4['text-center']].join(' ')}>
            <button type="button" className={[bs4.btn, bs4['btn-success'], bs4['btn-lg']].join(' ')} onClick={this.submit}>Submit</button>
          </div>
          
        </form>

      </div>
    )
  }
}

export default Contacts
