import React from 'react'
import "./Skills.css"
import {skill} from "../../Data/Data"

const Skills = () => {

  return (
    <div className="cards-container">
      <h1>
        My <span style={{ color: "#9ee406" }}>Skills</span>
      </h1>
      <div className="skills-grid">
        {skill.map((card, index) => (
          <div className="cardd" key={index}>
            <img src={card.img} className="img" alt={card.nameImg} />
            <div className="textBox">
              <p className="text head">{card.nameImg}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}

export default Skills