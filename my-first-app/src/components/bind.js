// import React, { Component } from 'react'

// export class Bind extends Component {
//   constructor() {
//     super()
  
//     this.state = {
//       msg: "jesus"
       
//     }
//   }
//   changeMessage = () => {
//     this.setState({
//      msg:"i am crrazzy with jesus in love with him"
//    })
//  }
  
//   render() {
//     return (
//       <div>
//         <h1>{this.state.msg}</h1>
//         <button onClick={this.changeMessage}>NAAN TUQI</button>
        
//       </div>
//     )
//   }
// }

// export default Bind
import React, { Component } from 'react'

class Bind extends Component {
  constructor() {
    super()
  
    this.state = {
      msg:"wada"
       
    }
    this.changeMessage = this.changeMessage.bind(this)
  }
changeMessage(){
  this.setState({
    msg:"waadaa akkam nagaa keetii  jirtaa haaadhokoo"

  })
  }
  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={this.changeMessage}> na tuqii</button>
      </div>
    )
  }
}

export default Bind

