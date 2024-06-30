import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import Testimonialbg from "../assets/testimonials-bg.jpg";
import testimonial1 from "../assets/testimonials/testimonials-1.jpg";
import testimonial2 from "../assets/testimonials/testimonials-2.jpg";
import testimonial3 from "../assets/testimonials/testimonials-3.jpg";
import testimonial4 from "../assets/testimonials/testimonials-4.jpg";
import testimonial5 from "../assets/testimonials/testimonials-5.jpg";

const testimonials = [
  {
    name: "Saul Goodman",
    title: "Ceo & Founder",
    content:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus",
    img: testimonial1,
  },
  {
    name: "Sara Wilsson",
    title: "Designer",
    content:
      "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum. Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus",
    img: testimonial2,
  },
  {
    name: "Jena Karlis",
    title: "Store Owner",
    content:
      "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam. Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus",
    img: testimonial3,
  },
  {
    name: "Matt Brandon",
    title: "Freelancer",
    content:
      "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat . Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus",
    img: testimonial4,
  },
  {
    name: "John Larson",
    title: "Entrepreneur",
    content:
      "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam. Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus",
    img: testimonial5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-20 bg-cover bg-center  bg-fixed"
      style={{ backgroundImage: `url(${Testimonialbg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative  mx-auto" data-aos="zoom-in">
        <div className="flex items-center justify-center flex-col h-full">
          <Swiper
            breakpoints={{
              340: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              700: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
            }}
            freeMode={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="w-full"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center text-center text-white p-8">
                  <div className="head-content -mt-5 mb-5 flex items-center flex-col">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-24 h-24 rounded-full border-4 border-white mb-4"
                    />
                    <h3 className="text-2xl font-bold">{item.name}</h3>
                    <h4 className="text-xl text-gray-300 mb-4">{item.title}</h4>
                  </div>
                  <p className="italic mb-6 w-1/2">{item.content}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
