import React from "react";

const Services = () => {
  const services = [
    {
      icon: "bx bxl-dribbble",
      title: "Lorem Ipsum",
      description:
        "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
      delay: 100,
    },
    {
      icon: "bx bx-file",
      title: "Sed ut perspiciatis",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
      delay: 200,
    },
    {
      icon: "bx bx-tachometer",
      title: "Magni Dolores",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
      delay: 300,
    },
    {
      icon: "bx bx-world",
      title: "Nemo Enim",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
      delay: 100,
    },
    {
      icon: "bx bx-slideshow",
      title: "Dele cardo",
      description:
        "Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur",
      delay: 200,
    },
    {
      icon: "bx bx-arch",
      title: "Divera don",
      description:
        "Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur",
      delay: 300,
    },
  ];

  return (
    <div className="contain" style={{ maxWidth: "80%", margin: "auto" }}>
      <section id="services" className="py-16 overflow-hidden">
        <div className="container mx-auto px-4" data-aos="fade-up">
          <div className="section-title mb-5" data-aos="fade-right">
            <div className="flex flex-row items-center">
              <h2 className="text-xs font-semibold tracking-wider uppercase text-gray-600">
                Services
              </h2>
              <div className="h-0.5 color bg-blue-500 w-20 ml-3 mt-1"></div>
            </div>
            <h4 className="text-4xl font-bold uppercase text-gray-900">
              CHECK OUR SERVICES
            </h4>
          </div>
          <div className="flex flex-wrap -mx-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="w-full lg:w-1/3 md:w-1/2 px-4 mb-8 flex justify-center"
                data-aos="zoom-in"
                data-aos-delay={service.delay}
              >
                <div className="icon-box text-center border border-gray-200 p-8 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                  <div className="icon mx-auto mb-4 w-16 h-16 bg-yellow-500 rounded flex items-center justify-center transition-all duration-300">
                    <i className={`${service.icon} text-2xl text-gray-900`}></i>
                  </div>
                  <h4 className="text-xl font-bold mb-2">
                    <a
                      href="#home"
                      className="text-gray-900 hover:text-yellow-500 transition-all duration-300"
                    >
                      {service.title}
                    </a>
                  </h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
