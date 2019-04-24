// @flow

import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import withStyles from 'isomorphic-style-loader/withStyles'

import { bs4 } from '../../shared'
import styles from './Contacts.scss'
import { sendContactUsForm, setModal } from '../../../redux'
import Form from './Form/Form'

type Props = {
  isLoading: boolean,
  isFormSent: boolean,
  error: string,
  sendContactUsForm: Function,
  setModal: Function
}

type State = {
  firstName: string,
  lastName: string,
  phone: string,
  email: string,
  message: string,
  validation: {
    firstName: boolean,
    email: boolean,
    message: boolean
  }
}

class Contacts extends React.Component<Props, State> {

  state = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
    validation: {
      firstName: true,
      email: true, 
      message: true
    }
  }

  componentWillReceiveProps(newProps: Props) {
    const { isFormSent, error } = this.props
    if (newProps.isFormSent !== isFormSent && newProps.isFormSent) {
      this.props.setModal('Success', 'Thank you for your message')
      this.setState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: ''
      })
    } 

    if (newProps.error !== error && newProps.error) {
      this.props.setModal('Error', newProps.error)
    } 
  }

  onInputChange = (id: string, value: string) => {
    this.setState({ [id]: value })
  }

  onInputValidityChange = (id: string, isValid: boolean) => {
    const { validation } = this.state
    const newValidation = Object.assign({}, validation, { [id]: isValid })
    this.setState({ validation: newValidation })
  }

  submit = () => {
    this.props.sendContactUsForm(this.state)
  }
  
  isSubmitDisabled() {
    const { firstName, email, message, validation } = this.state
    return !(firstName && email && message && validation.firstName && validation.email && validation.message )
  }

  render() {
    const { firstName, lastName, email, message, phone, validation } = this.state
    const { isLoading } = this.props
    return (
      <div className={[bs4.container, styles.contacts].join(' ')}>
        <Helmet title="Contact Us" />
        <h1>Let’s Talk!</h1>
        <div className={[bs4['text-muted'], bs4['col-md-10'], bs4['col-lg-8'], bs4['col-xl-7'], bs4['mx-auto']].join(' ')}>
          Have a project idea or general inquiry? Please don’t hesitate to ask us - we will
          contact you as soon as possible.
        </div>
        <Form 
          firstName={firstName}
          lastName={lastName}
          email={email}
          phone={phone}
          message={message}
          isLoading={isLoading}
          onInputChange={this.onInputChange}
          onSubmit={this.submit}
          isSubmitDisabled={this.isSubmitDisabled()}
          onInputValidityChange={this.onInputValidityChange}
          validation={validation}
        />
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  error: state.contactUsReducer.error,
  isLoading: state.contactUsReducer.isLoading,
  isFormSent: state.contactUsReducer.isFormSent
})

const mapDispatchToProps = (dispatch: Function) => ({
  sendContactUsForm(data) {
    dispatch(sendContactUsForm(data))
  },
  setModal(title: string, content: string) {
    dispatch(setModal(title, content))
  }
})

export const UnwrappedContacts = Contacts

export default withStyles(bs4, styles)(connect(mapStateToProps, mapDispatchToProps)(Contacts))