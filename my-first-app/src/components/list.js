import React from 'react'

function Programming() {
   const prog=['python','c++','java','java']
  return (
    <div>
      {/* <h1>{prog[0] }</h1>
      <h1>{prog[1] }</h1>
      <h1>{prog[2] }</h1>
       */}
      {
       // prog.map(name => <h1 key={name}>
         // {name}</h1>)
        prog.map((name, index) => <h1 key={index}>
        <li type='square' >{name}</li></h1>)
      }
      
    </div>
  )
 }
export default Programming;

