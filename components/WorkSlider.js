import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Amazon Clone",
          path: "/amazon.png",
          link: "https://amazon-clone-with-nextjs-reactjs-webhooks-stripe-checkout-fi.mhuzaifa4.repl.co/",
        },
        {
          title: "Lovum",
          path: "/Lovum.png",
          link: "https://lovum-7d70c.web.app/",
        },
        {
          title: "Hulu Clone",
          path: "/hulu.png",
          link: "https://hulu-1586e.web.app/",
        },
        {
          title: "Baggins",
          path: "/baggins.png",
          link: "https://baggin-git-mehdidev-erenyea.vercel.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "AIgnitiveX",
          path: "/aignitivex.png",
          link: "https://aignitivex.com/",
        },
        {
          title: "MyBricks",
          path: "/mybricks.png",
          link: "https://mybricks.vercel.app/",
        },
        // {
        //   title: "title",
        //   path: "/thumb2.jpg",
        // },
        // {
        //   title: "title",
        //   path: "/thumb3.jpg",
        // },
      ],
    },
  ],
};

// data

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {item.images.map((image, index) => {
                return (
                  <a
                    key={index}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    href={image.link}
                    target="_blank"
                  >
                    <div className="flex items-center justify-center h-full relative overflow-hidden group">
                      <Image
                        src={image.path}
                        alt=""
                        width={500}
                        height={300}
                        className=" object-cover h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                    </div>
                    <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                      <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                        <div className="delay-100">LIVE</div>
                        <div className=" translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                          PROJECT
                        </div>
                        <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200 ">
                          <BsArrowRight />
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
