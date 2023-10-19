import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper";

import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

// testimonial data
const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Victoria Mugela",
    position: "Client",
    message:
      "Great to work with. Develop the application quite fast. Always cooperative and easy to communicate. ",
  },
  {
    image: "/owais.png",
    name: "Owais",
    position: "Client",
    message:
      "I am pleased to provide my strongest recommendation for Hamza Ali Khan as a Junior Software Engineer. Throughout our time working together, I had the privilege of witnessing Hamza's unwavering dedication and exceptional expertise in the field of data collection from diverse sources. Hamza consistently demonstrated meticulous attention to detail, ensuring the utmost precision and reliability of the collected data. ",
  },
  {
    image: "/t-avt-3.png",
    name: "David",
    position: "Client",
    message:
      "Great to work with. Develop the application quite fast. Always cooperative and easy to communicate.",
  },
];

// data

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16 ">
              <div
                className="w-full max-w-[300px] flex flex-col xl:justify-center
              items-center relative mx-auto xl:mx-0"
              >
                <div className="flex flex-col justify-center text-center">
                  <div className="mb-2 mx-auto">
                    <Image src={person.image} width={100} height={100} alt="" />
                  </div>
                  <div className="text-lg">{person.name}</div>
                  <div className="text-[12px] uppercase font-extralight tracking-widest">
                    {person.position}
                  </div>
                </div>
              </div>
              <div className=" flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                <div className="xl:text-lg text-center md:text-left">
                  {" "}
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
