import React from "react";
import "./BentoGrid.css";
import code from "../../Image/code2.jpeg";
import { Earth } from "./Earth";
import {ContentCard} from "./ContentCard";
import b1 from "../../Image/b1.jpg"
import b5 from "../../Image/b5.jpg"
import techstack from "../../Image/b6.jpg"
import b8 from "../../Image/b8.jpg"


const BentoGrid = () => {
  const items = [
    { id: 1, content: "I value teamwork and emphasize transparent communication to achieve shared goals.", type: "large", image: `${b1}`, hasText: true ,name: false},
    { id: 2, content: "Flexible Communication", type: "medium", image: null, hasText: false,name: false },
    { id: 3, smallContent:"Insider",content: "Currently working on RJ&Snacks and open source", type: "medium", image: `${b5}`, hasText: false, name: false },
    { id: 4, content: "A tech-savvy individual with a strong enthusiasm for development", type: "small", image: `${b8}`, hasText: true,name: false },
    { id: 5, content: <Earth />, type: "small", image: null, hasText: true, name: true},
    { id: 6, content: <ContentCard />, type: "small", image: null, hasText: true,name: false },
    { id: 7, smallContent:"",content: "", type: "small", image: `${techstack}`, hasText: true,name: false }
  ];

  return (
    <div className="bento-grid">
      {items.map((item) => (
        <div
          key={item.id}
          className={`bento-item ${item.type} `}
          style={{
            backgroundImage: item.image ? `url(${item.image})` : "",
          }}

          
        >
          {item.hasText && item.name ? (
            <div className="image-black">
              {typeof item.content === "string" ? <h2>{item.content}</h2> : item.content}
            </div>
            
          ):("")}
          {item.hasText && !item.image ? (
            <div className="text-only">
              {typeof item.content === "string" ? <h2>{item.content}</h2> : item.content}
            </div>
          ) : (
            <div className="overlay">
              {typeof item.smallContent === "string" ? <p className="pe">{item.smallContent}</p> : item.smallContent}
              {typeof item.content === "string" ? <h2>{item.content}</h2> : item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BentoGrid;
