import React from "react";

class Phone extends React.Component {
  render () {
    const {phoneNumber} = this.props
    return(
      <a class="btn btn-primary" href={`callto:${phoneNumber}`}>Call</a>
    )
  }
}

export default Phone