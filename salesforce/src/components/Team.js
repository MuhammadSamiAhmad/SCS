import React from "react";

import team1 from "../assets/team/team-1.jpg";
import team2 from "../assets/team/team-2.jpg";
import team3 from "../assets/team/team-3.jpg";
import team4 from "../assets/team/team-4.jpg";

export default function Team() {
  const teamMembers = [
    {
      img: team1,
      name: "Walter White",
      position: "Chief Executive Officer",
      delay: "100",
    },
    {
      img: team2,
      name: "Sarah Johnson",
      position: "Product Manager",
      delay: "200",
    },
    {
      img: team3,
      name: "William Anderson",
      position: "CTO",
      delay: "300",
    },
    {
      img: team4,
      name: "Amanda Jepson",
      position: "Accountant",
      delay: "400",
    },
  ];

  return (
    <div className="contain" style={{ maxWidth: "80%", margin: "auto" }}>
      <section id="team" className="team py-16">
        <div className="container mx-auto px-4" data-aos="fade-up">
          <div className="section-title" data-aos="fade-right">
            <div className="flex flex-row items-center">
              <h2 className="text-xs font-semibold tracking-wider uppercase text-gray-600">
                Team Members
              </h2>
              <div className="h-0.5 color bg-blue-500 w-20 ml-3 mt-1"></div>
            </div>
            <h4 className="text-4xl font-bold uppercase text-gray-900">
              MEET OUR TEAM
            </h4>
          </div>
          <div className="flex flex-wrap justify-center">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 lg:w-1/4 p-4"
                data-aos="fade-up"
                data-aos-delay={member.delay}
              >
                <div className="member bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="member-img relative">
                    <img
                      src={member.img}
                      className="img-fluid w-full"
                      alt={member.name}
                    />
                  </div>
                  <div className="member-info p-6">
                    <h4 className="font-bold text-lg text-gray-900 mb-1">
                      {member.name}
                    </h4>
                    <span className="text-sm text-gray-500">
                      {member.position}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
