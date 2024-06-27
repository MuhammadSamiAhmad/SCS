import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";

import TestimonialItem from "./TestimonialItem";

import TestimonialImage1 from "../assets/testimonials/testimonials-1.jpg";
import TestimonialImage2 from "../assets/testimonials/testimonials-2.jpg";
import TestimonialImage3 from "../assets/testimonials/testimonials-3.jpg";
import TestimonialImage4 from "../assets/testimonials/testimonials-4.jpg";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Saul Goodman",
      role: "Ceo & Founder",
      img: TestimonialImage1,
      quote:
        "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    },
    {
      name: "Sara Wilsson",
      role: "Designer",
      img: TestimonialImage2,
      quote:
        "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    },
    {
      name: "Jena Karlis",
      role: "Store Owner",
      img: TestimonialImage3,
      quote:
        "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
    },
    {
      name: "Matt Brandon",
      role: "Freelancer",
      img: TestimonialImage4,
      quote:
        "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const testimonialsPerPage = 2; // Number of patients per page

  const indexOfLastTestimonial = currentPage * testimonialsPerPage;
  const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;

  const currentTestimonials = testimonials.slice(
    indexOfFirstTestimonial,
    indexOfLastTestimonial
  );

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ behavior: "smooth" });
  };
  return (
    <div className="TestimonialContainer">
      <div className="testimonials">
        {currentTestimonials.map((testimonial, index) => (
          <TestimonialItem key={index} testimonial={testimonial} />
        ))}
      </div>
      <div>
        {testimonials.length > 2 && (
          <Pagination
            color="standard"
            defaultPage={1}
            count={Math.ceil(testimonials.length / 2)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </div>
    </div>
  );
}
