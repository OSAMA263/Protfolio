import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import Pictures from "./Pictures";
import { useState } from "react";
import tw from "tailwind-styled-components";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

export default function Slider({ sliderImages }) {
  const [activeInd, setActiveInd] = useState(0);

  const swiperProps = {
    spaceBetween: 10,
    slidesPerView: 1,
    allowTouchMove: true,
    modules: [Navigation],
    navigation: { nextEl: "#next", prevEl: "#prev" },
    breakpoints: {
      645: {
        spaceBetween: 40,
      },
    },
    onTransitionEnd: (e) => setActiveInd(e.activeIndex),
  };

  return (
    <>
      <Swiper {...swiperProps} className="rounded-xl">
        {sliderImages.pc.map((_, i) => (
          <SwiperSlide
            key={i}
            className="rounded-xl flex items-center justify-center "
          >
            <Pictures {...{ sliderImages, i }} />
          </SwiperSlide>
        ))}
      </Swiper>
      <NavigationButtons {...{ sliderImages, activeInd }} />
    </>
  );
}

const NavigationButtons = ({ sliderImages, activeInd }) => {
  return (
    <NavigateWrapper $sliderImages={sliderImages} $activeInd={activeInd}>
      <button aria-label="prev" id="prev">
        <IoIosArrowDropleftCircle />
      </button>
      <button aria-label="next" id="next">
        <IoIosArrowDroprightCircle />
      </button>
    </NavigateWrapper>
  );
};

const NavigateWrapper = tw.div`
${({ $activeInd }) => $activeInd === 0 && "[&>#prev]:opacity-0"}
${({ $activeInd, $sliderImages }) =>
  $activeInd === $sliderImages.pc.length - 1 && "[&>#next]:opacity-0"}
  lg:flex
  hidden
text-white
-translate-y-1/2
z-[69696969]
text-4xl
absolute
w-[110%]
left-1/2
-translate-x-1/2
justify-between
top-1/2
`;
