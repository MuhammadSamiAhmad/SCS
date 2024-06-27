import React from "react";

export default function TestimonialItem({ testimonial }) {
  return (
    <div className="testimonial-card">
      <img
        src={testimonial.img}
        alt={testimonial.name}
        className="testimonial-img"
      />
      <h3>{testimonial.name}</h3>
      <h4>{testimonial.role}</h4>
      <p>{testimonial.quote}</p>
    </div>
  );
}
