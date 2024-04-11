import tw from "tailwind-styled-components";
import { useState } from "react";
import Modal from "./modal/Modal";
import Project from "./Project/Project";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { ProjectsInfo } from "./data";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { useDisclosure } from "@chakra-ui/react";

export default function ProjectsContainer() {
  const [selectedProject, setSelectedProject] = useState({});
  const [activeInd, setActiveInd] = useState(0);
  const { onOpen, onClose, isOpen } = useDisclosure();

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    onOpen();
  };

  const swiperProps = {
    spaceBetween: 10,
    grabCursor: false,
    slidesPerView: 1,
    allowTouchMove: true,
    modules: [Navigation],
    navigation: { nextEl: "#next-slide", prevEl: "#prev-slide" },
    speed:1000,
    breakpoints: {
      645: {
        grabCursor: false,
        spaceBetween: 40,
        slidesPerView: 1,
      },
    },
    onTransitionEnd: (e) => setActiveInd(e.activeIndex),
  };

  return (
    <>
      <Container
        // className={
        //   activeInd === ProjectsInfo.length - 1
        //     ? "[&.sides-shadow::after]:!opacity-0"
        //     : "sides-shadow"
        // }
      >
        <Swiper className="!select-none !w-full h-full !rounded-xl" {...swiperProps}>
          {ProjectsInfo.map((slide, i) => (
            <SwiperSlide className="!w-full" key={i}>
              <SliderWrapper>
                <Project {...{ slide, handleProjectClick }}></Project>
              </SliderWrapper>
            </SwiperSlide>
          ))}
        </Swiper>
        <NavigateBtns $slider={ProjectsInfo} $activeInd={activeInd}>
          <Button aria-label="prev-btn" id="prev-slide">
            <BiLeftArrow />
          </Button>
          <Button aria-label="next-btn" id="next-slide">
            <BiRightArrow />
          </Button>
        </NavigateBtns>
      </Container>
      {/* modal */}
      <Modal {...{ onClose, isOpen, selectedProject }} />
    </>
  );
}

const Button = tw.button`
[&>svg]:hover:scale-125
rounded-3xl 
`;

const NavigateBtns = tw.div`
${({ $activeInd }) => $activeInd === 0 && "[&>#prev-slide]:opacity-0"}
${({ $activeInd, $slider }) =>
  $activeInd === $slider.length - 1 && "[&>#next-slide]:opacity-0"}
w-full 
pt-2
flex 
text-2xl
justify-between
`;

const Container = tw.div`
h-[60vh]
xl:w-[80%]
m-auto
relative 
`;

const SliderWrapper = tw.div`
h-full
w-full
m-auto
grid
grid-cols-2
sm:grid-rows-4
grid-rows-2
overflow-hidden
sm:gap-5
gap-4
`;
