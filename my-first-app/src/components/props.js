import React from 'react'
const Goodmorning = (props) => {
  return ( 
    <div>
      <h1>{props.Name} waadaa:Age {props.Age}</h1>
      {props.Children}
    </div>
   
   );
}
 
export default Goodmorning ;