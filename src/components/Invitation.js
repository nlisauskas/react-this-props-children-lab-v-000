// Code Invitation Component Here
import React from 'react';

class Invitation extends React.Component {
  render () {
    return(
      <div className="Invitation">
      <h1>{"You've been invited!"}</h1>
      <p>{this.props.children}</p>
      </div>
    );
  }
}

export default Invitation
