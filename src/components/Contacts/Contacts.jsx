// @flow

import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'

import { bs4 } from '../shared'
import styles from './Contacts.scss'
import { sendContactUsForm, setModal } from '../../redux'
import Form from './Form/Form'

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
  message: string
}

class Contacts extends React.Component<Props, State> {

  constructor(props: Props){
    super(props)
    this.onInputChange = this.onInputChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  state = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  }

  componentWillUpdate(newProps) {
    if (newProps.isFormSent !== this.props.isFormSent && newProps.isFormSent) {
      this.props.setModal('Success', 'Thank you for your message')
      this.setState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: ''
      })
    } 

    if (newProps.error !== this.props.error && newProps.error) {
      this.props.setModal('Error', newProps.error)
    } 
  }

  onInputChange(id: string, value: string) {
    this.setState({ [id]: value })
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

        <Form 
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          phone={this.state.phone}
          message={this.state.message}
          isLoading={this.props.isLoading}
          onInputChange={this.onInputChange}
          onSubmit={this.submit}
          isSubmitDisabled={this.isSubmitDisabled()}
        />

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
