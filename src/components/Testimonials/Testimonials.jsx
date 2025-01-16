import React from "react";
import Marquee from "react-fast-marquee";
import  {testimonials}  from "../../Data/Data"; 
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="infinite-cards-container">
      <h1>
      Warm words from <span style={{ color: "#9ee406" }}>grateful Peers</span>
      </h1>
      <Marquee gradient={false} speed={65} pauseOnHover={true}>
        {testimonials.map((testimonial, index) => (
          <div className="infinite-card" key={index}>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="infinite-card-image"
            />
            <div className="nameTitle">
            <h3 className="infinite-card-name">{testimonial.name}</h3>
            <p className="infinite-card-title">{testimonial.title}</p>
            </div>
            <p className="infinite-card-quote">"{testimonial.quote}"</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Testimonials;
