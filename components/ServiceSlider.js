import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
  RxRobot,
} from "react-icons/rx";
import { VscBracketDot } from "react-icons/vsc";

import { FreeMode, Pagination } from "swiper";

// data
const serviceData = [
  {
    icon: <VscBracketDot />,
    title: "Machine Learning",
    description:
      "Enhancing workplace safety and efficiency with innovative machine learning solutions.",
  },
  {
    icon: <RxPencil2 />,
    title: "Web Development",
    description:
      "Delivering dynamic, user-focused and complex web and mobile solutions.",
  },
  {
    icon: <RxDesktop />,
    title: "Computer Vision",
    description:
      "Boosting security and efficiency with innovative Computer Vision.",
  },
  {
    icon: <RxReader />,
    title: "Web Scraping",
    description:
      "Developing fast and scaled web crawler and scrapers that bypass security",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              <div className="text-3xl ">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
