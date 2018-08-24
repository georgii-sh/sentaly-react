// @flow

import React from 'react'

import { bs4 } from '../'

type Props = {
  id: string,
  type: string,
  placeholder: string,
  value: string,
  onChange: Function
}

class Contacts extends React.Component<Props> {

  constructor(props: Props) {
    super(props)
    this.onInputChange = this.onInputChange.bind(this)
  }

  onInputChange(e: any) {
    this.props.onChange(this.props.id, e.target.value)
  }
  
  render() {
    return (
      <input
        type={this.props.type || 'text'}
        className={bs4['form-control']}
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChange={this.onInputChange}
      />
    )
  }
}

export default Contacts
