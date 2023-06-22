import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Projects } from "./utils/ProjectDB";

const ProjectCard = () => {
  return (
    <div className="lg:flex justify-center px-2">
      <Swiper
        centeredSlides={true}
        spaceBetween={30}
        breakpoints={{
          "@0.75": {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {Projects.map((item) => (
          <SwiperSlide key={item.title} className="px-10 py-12 relative" style={{height: 500, width: 500}}
          >
            <div className="h-full flex flex-col justify-center items-center">
              <div className="relative">
                <h3 className="text-lg sm:text-xl font-bold ">{item.title}</h3>
                <p className="text-base py-4 pb-6 ">{item.description}</p>
                <div className="flex flex-wrap justify-center mb-4">
                  {item.skills.map((skill) => (
                    <span key={skill} className="inline-block bg-gray-500 text-white text-sm px-2 py-1 rounded mr-2 mb-2">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

               <a className="absolute  top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center bg-[#0d437d] bg-opacity-50 transition-opacity duration-300 opacity-0 hover:opacity-100 px-2" href=""><img
                  src={item.image}
                  alt=""
                  className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-110"
                /></a>
              </div>
         
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectCard;
