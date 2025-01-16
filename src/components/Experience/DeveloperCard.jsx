import React from "react";
import "./Experience.css"

const DeveloperCard = ({ title, description, imageUrl }) => {
  return (
    <div className="developer-card">
      <div 
        className="developer-card-img" 
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="developer-card-textBox">
        <div className="developer-card-textContent">
          <p className="developer-card-title">{title}</p>
      
        </div>
        <p className="developer-card-description">{description}</p>
      </div>
    </div>
  );
};

export default DeveloperCard;
