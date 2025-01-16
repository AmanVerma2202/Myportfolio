import React from 'react'
import "./About.css"
import profile from "../../Image/ama.jpeg"
const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="about-image-container">
        <img
          className="about-image"
          src={profile}
          alt="Profile"
        />
      </div>
      <div className="about-text-container">
        <h1 className="about-heading">
          My<span className="highlight"> Story</span>
        </h1>
        <p className="about-description">
          Born and raised in Barabanki, Uttar Pradesh, I am pursuing my
          Engineering Degree in Computer Science and Engineering from Vellore
          Institute of Technology, Bhopal. Started my career as a Full Stack
          Developer finally working on DevOps.
        </p>
      </div>
    </div>
  )
}

export default About