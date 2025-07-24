import React, { Component } from 'react'

class Eventc extends Component {
  handler() {
    alert("bagaa naagan  gaa giddu galaa keenyaa nagaan dhuftaan")
    
  }
  render() {
    return (
      <div>
        <button onClick={this.handler}>astuqi</button>
        
      </div>
    )
  }
}

export default Eventc
