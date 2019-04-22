// @flow

import React from 'react'
import { Route } from 'react-router-dom'

type Props = { 
  code: number, 
  children: any 
}

class Status extends React.Component<Props> {
  updateStatusCode = ({ staticContext }: { staticContext?: { status?: number, url?: string }}) => {
    const { code, children } = this.props
    // eslint-disable-next-line no-param-reassign
    if (staticContext) staticContext.status = code
    return children
  }

  render() {
    return (
      <Route
        render={this.updateStatusCode}
      />
    )
  }
}

export default Status