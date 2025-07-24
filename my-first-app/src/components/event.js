import React from 'react'

function Event() {
  function Handler() {
    alert("welcome to here")
   }
  return (
    <div>
      <button onClick={Handler}>click me</button>
      
    </div>
  )
 }
export default Event

