import React from "react";
import { workExperience } from "../../Data/Data";
import "./Experience.css"
import DeveloperCard from "./DeveloperCard";

const Experience = () => {
  return (

    <div className="exper">
      <h1>My <span style={{color:"#9ee406"}}>Experiences</span></h1>
      <div className="exp" >
      
      {workExperience.map((card, index) => (

          <DeveloperCard 
          key={card.id} 
          title={card.title} 
          description={card.desc} 
          imageUrl={card.thumbnail} 
        />


      ))}
    </div>
    </div>
    
  );
};

export default Experience;
