import tw from "tailwind-styled-components";
import { useState } from "react";
import Modal from "./modal/Modal";
import Project from "./Project/Project";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { ProjectsInfo } from "./data";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { useDisclosure, useMediaQuery,  } from "@chakra-ui/react";
import { motion, useSpring, useTransform } from "framer-motion";

export default function ProjectsContainer({ scrollProg }) {
  const [selectedProject, setSelectedProject] = useState({});
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [sm_screen] = useMediaQuery("(max-width: 640px)");

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    onOpen();
  };

  // slideX ther projects onscroll
  const springConfig = { stiffness: 50, damping: 30 };
  const x = useTransform(scrollProg, [0, 1], ["0%", "-75%"]);
  const scaleX = useTransform(scrollProg, [0, 1], [0, 1]);
  const scaleBar = useSpring(scaleX, springConfig);
  return (
    <>
      <motion.div className="flex relative" {...fadeInAnimation}>
        <Container
          // className={
          //   activeInd === ProjectsInfo.length - 1
          //     ? "[&.sides-shadow::after]:!opacity-0"
          //     : "sides-shadow"
          // }
          style={{ x: sm_screen ? 0 : x }}
        >
          {!sm_screen ? (
            /* projects on lg screens */
            <div className="flex gap-x-6 w-full max-sm:hidden h-full">
              {ProjectsInfo.map((slide, i) => (
                <Project key={i} {...{ slide, handleProjectClick }}></Project>
              ))}
            </div>
          ) : (
            <SmScreensProjects handleProjectClick={handleProjectClick} />
          )}
        </Container>
      </motion.div>
      {/* modal */}
      <Modal {...{ onClose, isOpen, selectedProject }} />
      <ProgressXBar style={{ scaleX: scaleBar }} />
    </>
  );
}
// small devices projects swiper
const SmScreensProjects = ({ handleProjectClick }) => {
  const [activeInd, setActiveInd] = useState(0);
  
  const swiperProps = {
    spaceBetween: 10,
    grabCursor: false,
    slidesPerView: 1,
    allowTouchMove: true,
    modules: [Navigation],
    navigation: { nextEl: "#next-slide", prevEl: "#prev-slide" },
    speed: 1000,
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
      {/* ---make the swiper for the small devices only  */}
      <Swiper
        className="!select-none !w-full h-full !rounded-xl sm:hidden"
        {...swiperProps}
      >
        {ProjectsInfo.map((slide, i) => (
          <SwiperSlide className="!w-full" key={i}>
            <SliderWrapper>
              <Project {...{ slide, handleProjectClick }}></Project>
            </SliderWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
      <NavigateBtns $slider={ProjectsInfo} $activeInd={activeInd}>
        <button
          className="[&>svg]:hover:scale-125 rounded-3xl"
          aria-label="prev-btn"
          id="prev-slide"
        >
          <BiLeftArrow />
        </button>
        <button
          className="  [&>svg]:hover:scale-125 rounded-3xl"
          aria-label="next-btn"
          id="next-slide"
        >
          <BiRightArrow />
        </button>
      </NavigateBtns>
    </>
  );
};

const ProgressXBar = tw(motion.span)`
absolute
-bottom-6
h-1
w-full
!ml-0
bg-[#353535]
rounded-full
max-sm:hidden
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

const Container = tw(motion.div)`
h-[60vh]
m-auto
relative
max-sm:!translate-x-0
transition-all 
ease-linear
duration-300
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

const fadeInAnimation = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1, transition: { opacity: { delay: 1.5 } } },
  viewport: { once: true },
};
