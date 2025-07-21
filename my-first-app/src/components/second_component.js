import React, { Component } from 'react'

 class SecondComponent extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.Maqa}guddina age:{this.props.Umuri}</h1>
        {this.props.children}
        
      </div>
    )
  }
 }
export default SecondComponent;
