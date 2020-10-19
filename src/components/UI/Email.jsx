import React from "react";
import faker from 'faker'

class Email extends React.Component {
  render () {
    const {firstName} = this.props
    const {lastName} = this.props
    return(
      <a class="btn btn-primary" href={`mailto:${firstName.toLowerCase() + lastName.toLowerCase()}@gmail.com`}>Send mail</a>
    )
  }
}

export default Email;