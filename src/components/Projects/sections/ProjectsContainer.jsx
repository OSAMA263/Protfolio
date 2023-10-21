import tw from "tailwind-styled-components";
import { useState } from "react";
import Modal from "./modal/Modal";
import Project from "./Project/Project";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { ProjectsInfo } from "./data";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

export default function ProjectsContainer() {
  const [selectedProject, setSelectedProject] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [activeInd, setActiveInd] = useState(0);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setOpenModal(true);
  };

  const swiperProps = {
    spaceBetween: 10,
    grabCursor: false,
    slidesPerView: 1,
    modules: [Navigation],
    navigation: { nextEl: "#next-slide", prevEl: "#prev-slide" },
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
      <Container>
        <Swiper className="!select-none !w-full h-full" {...swiperProps}>
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
      <Modal {...{ setOpenModal, openModal, selectedProject }} />
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
`;

const SliderWrapper = tw.div`
h-full
w-full
m-auto
grid
grid-cols-2
grid-rows-4
overflow-hidden
gap-2
sm:p-4
`;
