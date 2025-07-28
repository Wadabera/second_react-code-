import React, { use, useEffect, useRef } from 'react'

function Refff() {
  
  const inputref=useRef(null)
  useEffect(() => {
    inputref.current.focus()
    
  },[])
  return (
    <div>
  
    <input ref={inputref} type='text'></input>
      
    </div>
  )
}

export default Refff
