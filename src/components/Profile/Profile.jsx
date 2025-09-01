import React from 'react'
import Card from "./Card";
import "./Profile.css"
import code from "../../Image/code2.jpeg"
import { ReactTyped } from 'react-typed';

import resume from "../../Image/AmanVerma.pdf"

const Profile = () => {
  
  return (
    <div className='profile'>
      <div className="hero-container">
          <p className="intro-text">I design stuff for the web!</p>
          {/* <h1 className="typing-text">{text}</h1> */}
          <ReactTyped className="typing-text" strings={["Hi! I'm Aman Verma"]} typeSpeed={100} showCursor={false} />
          
          
          <p className="subheadline">Upcoming SE at Infosys  |  Full Stack Web Developer (DevOps)</p>
        <a href={resume} download="AmanVerma.pdf">
          <button className="custom-button">
            Download Resume
          </button>
        </a>
      </div>
    
      <div className="cards">
        <Card className="one" imageSrc={code} />
        <Card className="two" imageSrc={code} />
        <Card className="three" imageSrc={code} />
      </div>
    </div>
  )
}

export default Profile
