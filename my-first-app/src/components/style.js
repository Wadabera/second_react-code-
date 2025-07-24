import React from 'react'
import './style.css'

function Style(props) {
   let me=props.make? 'make':''
  return (
    <div>
      <h1 className={`${me} fsize`} >well come to Gindeberet kachisi</h1>
      
    </div>
  )
 }
export default Style;
