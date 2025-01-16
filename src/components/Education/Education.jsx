import React from 'react'
import "./Education.css"
import Time from './Timeline'

const Education = () => {
  return (
    <div className='education'>
      <h1>My <span style={{color:"#9ee406"}}>Education</span></h1>
      <div className='time'>
        <Time/>
      </div>
    </div>
  )
}

export default Education