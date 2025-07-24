import React, { useState } from 'react'

function Usestatecounter() {
  const [count, counterupdate]=useState(0)
  
  return (
    <div>
      <button onClick={()=>counterupdate(count+1)}>count: { count}</button>
   
    </div>
  )
}

export default Usestatecounter;
