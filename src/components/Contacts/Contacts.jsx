// @flow

import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'

import { bs4, Input } from '../shared'
import styles from './Contacts.scss'
import { sendContactUsForm, setModal } from '../../redux'

type Props = {
  isLoading: boolean,
  isFormSent: boolean,
  error: string,
  sendContactUsForm: Function
}

type State = {
  firstName: string,
  lastName: string,
  phone: string,
  email: string,
  message: string,
  isFirstNameValid: string,
  isEmailValid: string,
  isMessageValid: string,
}

class Contacts extends React.Component<Props, State> {

  constructor(props: Props){
    super(props)
    this.onInputChange = this.onInputChange.bind(this)
    this.onInputValidityChange = this.onInputValidityChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  state = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
    validations: {
      firstName: true,
      email: true,
      message: true
    }
  }

  componentWillUpdate(newProps) {
    if (newProps.isFormSent !== this.props.isFormSent && newProps.isFormSent) {
      this.props.setModal('Success', 'Thank you for your message')
      this.setState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
        validations: {
          firstName: true,
          email: true,
          message: true
        }
      })
    } 

    if (newProps.error !== this.props.error && newProps.error) {
      this.props.setModal('Error', newProps.error)
    } 
  }

  onInputChange(id: string, value: string) {
    this.setState({ [id]: value })
  }

  onInputValidityChange(id: string, isValid: boolean) {
    const validations = Object.assign({}, this.state.validations, {[id]: isValid})
    this.setState({ validations })
  }

  submit() {
    this.props.sendContactUsForm(this.state)
  }
  
  isSubmitDisabled() {
    return !(this.state.firstName && this.state.email && this.state.message && this.state.validations.email)
  }

  render() {
    return (
      <div className={[bs4.container, styles.contacts].join(' ')}>
        <Helmet title="Contact Us" />
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
                isRequired
                isInvalid={!this.state.validations.firstName}
                value={this.state.firstName} 
                onChange={this.onInputChange}
                onInputValidityChange={this.onInputValidityChange}
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
                isRequired
                isInvalid={!this.state.validations.email}
                placeholder="Email Address" 
                value={this.state.email} 
                onChange={this.onInputChange}
                onInputValidityChange={this.onInputValidityChange}
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
            <Input 
              type="textarea"
              id="message"
              isRequired
              isInvalid={!this.state.validations.message}
              placeholder="How can we help you?" 
              value={this.state.message} 
              onChange={this.onInputChange}
              onInputValidityChange={this.onInputValidityChange}
            />
          </div>
          <div className={[bs4['form-group'], bs4['text-center']].join(' ')}>
            <button 
              type="button"
              className={[bs4.btn, bs4['btn-success'], bs4['btn-lg'], this.props.isLoading ? styles.sending : ''].join(' ')} 
              onClick={this.submit}
              disabled={this.props.isLoading || this.isSubmitDisabled()}
            >
              Submit
              {this.props.isLoading && <i className="fa fa-circle-o-notch fa-spin"></i>}
            </button>
          </div>
          
        </form>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  error: state.contactUsReducer.error,
  isLoading: state.contactUsReducer.isLoading,
  isFormSent: state.contactUsReducer.isFormSent
})

const mapDispatchToProps = dispatch => ({
  sendContactUsForm(data) {
    dispatch(sendContactUsForm(data))
  },
  setModal(title: string, content: string) {
    dispatch(setModal(title, content))
  }
})

export const UnwrappedContacts = Contacts

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)
