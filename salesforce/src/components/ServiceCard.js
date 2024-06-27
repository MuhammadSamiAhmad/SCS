import React, { useState } from "react";
import { Handshake } from "lucide-react";
import "aos/dist/aos.css";

export default function ServiceCard({ title, description, benefits }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`service-card ${isHovered ? "service-card-hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Handshake size={48} strokeWidth={1.5} color="#179cd7" />
      <h3>{title}</h3>
      {isHovered && (
        <div className="service-details" data-aos="fade-up">
          <p>{description}</p>
          <h4 style={{ marginTop: "2%" }}>Benefits:</h4>
          <ul>
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
