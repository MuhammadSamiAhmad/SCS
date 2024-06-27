import React from "react";
import "aos/dist/aos.css";
export default function MemberCard({ name, role, img }) {
  return (
    <div className={`member-card`} data-aos="fade-up">
      <img src={img} alt="" />

      <div className="member-info">
        <h4>{name}</h4>
        <p>{role}</p>
      </div>
    </div>
  );
}
