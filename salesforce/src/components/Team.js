import React from "react";
import MemberCard from "./MemberCard";
import "aos/dist/aos.css";
import Member1 from "../assets/team/team-1.jpg";
import Member2 from "../assets/team/team-2.jpg";
import Member3 from "../assets/team/team-3.jpg";
import Member4 from "../assets/team/team-4.jpg";

export default function Team() {
  const teamMembers = [
    {
      name: "Walter White",
      role: "Chief Executive Officer",
      img: Member1,
    },
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      img: Member2,
    },
    {
      name: "William Anderson",
      role: "CTO",
      img: Member3,
    },
    {
      name: "Amanda Jepson",
      role: "Accountant",
      img: Member4,
    },
  ];
  return (
    <>
      <div className="team" data-aos="fade-up">
        <h1>Our Team</h1>
        <p>
          Our team consists of certified Salesforce consultants, developers, and
          project managers with years of experience in the industry. Get to know
          the experts who will be working on your projects.
        </p>
      </div>
      <div className="section-title" data-aos="fade-right">
        <h2>Team Members</h2>
        <h4>Meet Our Team</h4>
        <p>
          Our team consists of certified Salesforce consultants, developers, and
          project managers with years of experience in the industry. Get to know
          the experts who will be working on your projects.
        </p>
      </div>
      <div className="members-cards">
        {teamMembers.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            role={member.role}
            img={member.img}
          />
        ))}
      </div>
    </>
  );
}
