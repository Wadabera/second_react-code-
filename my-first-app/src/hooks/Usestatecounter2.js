import React, { useState } from 'react'

function Usestatecounter2() {
  let intialvalue = 0;
  const [count,counterupdater]=useState(intialvalue)
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={() => counterupdater(intialvalue)}>reset</button>
      <button onClick={() => counterupdater(count + 1)}>increment</button>
      <button onClick={() => counterupdater(count - 1)}>decrement</button>
    </div>
  )
}
export default Usestatecounter2;