
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

import { testimonials } from "../../data/testimonials";
import TestimonialCard from "./TestimonialCard";
import Vector from "../../assets/Vector.svg";

const TestimonialsSection = () => {
  return (
    <div className="text-white">
      
      <h5 className="mx-12 text-right border-b border-gray-300/50 pb-2 mb-4  font-inter font-medium text-[25px] leading-[120%] tracking-[0px] align-middle">
        Testimonials
      </h5>

      
      <div className="flex items-end">
        
        <div className="w-full lg:w-1/6 flex items-center lg:items-end justify-center p-2 lg:py-6 lg:px-4">
          <img src={Vector} alt="icon" className="w-16 h-16" />
        </div>

        
        <div className="w-5/6 pr-4">
          <Swiper
            modules={[FreeMode]}
            spaceBetween={24}
            slidesPerView="auto"
            grabCursor={true}
            freeMode={true}
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx} className="!w-auto">
                <TestimonialCard {...t} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
