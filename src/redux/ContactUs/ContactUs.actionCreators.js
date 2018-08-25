// @flow

import axios from 'axios'

export default function sendContactUsForm(params: {
  firstName: string,
  lastName: string,
  phone: string,
  email: string,
  message: string
}) {
  const apiUrl = process.env.API_URL || ''
  return (dispatch: Function) => {
    dispatch({ type: 'CONTACT_US_LOADING' })
    axios
      .post(`${apiUrl}contact`, params)
      .then(() => dispatch({ type: 'CONTACT_US_SUCCESS' }))
      .catch(err => dispatch({
        type: 'CONTACT_US_SET_ERROR',
        payload: { error: err.message }
      }))
  }
}

