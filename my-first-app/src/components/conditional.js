import React, { Component } from 'react'

export class Conditional extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isSubscribed: false,
    }
  }
  
  render() {
    // if (this.state.isSubscribed) {
    //   return (
    //   <div>
    //     <h1>subscribed</h1>
    //   </div>
    //   )
    // } else {
    //   return (
    //   <div>
    //     <h1>subscribe</h1>
    //   </div>
    //   )
    // }

    // }
    return (this.state.isSubscribed ?
      <div>rrrr</div> :
      <div>nnn</div>
    );
  }
}

export default Conditional;
