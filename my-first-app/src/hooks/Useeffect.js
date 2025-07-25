import React, { useEffect, useState } from 'react'

function Useeffect() {
  const [counter, counterfunction] = useState(0)
  useEffect(() => {
    console.log(counter)
  }, [])
  return (
    <div>
      you clicked: {counter}  times {""}
      <button onClick={()=>counterfunction(counter+1)}>increament</button>
      
    </div>
  )
}

export default Useeffect
