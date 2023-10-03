import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Pictures from "./Pictures";
import { projectPics } from "./data";

export default function Slider({ projectInd }) {
  return (
    <Swiper
      {...swiperProps}
      className="rounded-xl sm:!w-auto overflow-hidden"
    >
      {projectPics.map((ele, i) => (
        <SwiperSlide key={i} className="overflow-hidden rounded-xl">
          <Pictures {...{ projectPics, ele, projectInd, i }}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

const swiperProps = {
  spaceBetween: 10,
  slidesPerView: 1,
  breakpoints: {
    645: {
      grabCursor: true,
      spaceBetween: 40,
      slidesPerView: 1,
    },
  },
};
