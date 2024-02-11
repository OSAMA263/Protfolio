/* eslint-disable react/display-name */
import tw from "tailwind-styled-components";
import { PiEyeClosedLight } from "react-icons/pi";
import { LiaEyeSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import Curtains from "./Curtains";
import { memo } from "react";
import { Spinner } from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Project = (props) => {
  const { handleProjectClick, slide } = props;
  const handleClick = (completed, slide, i) => {
    completed && handleProjectClick(slide[i]);
  };

  return (
    <>
      {slide.map(({ completed, thumbnail, modal }, i) => (
        <GridCell
          initial="initial"
          whileHover="whileHover"
          animate="animate"
          onClick={() => handleClick(completed, slide, i)}
          style={{ gridArea: projectsPlace[i] }}
          key={i}
        >
          <Curtains></Curtains>
          {/* thumb nails */}
          <ThumbNail thumbnail={thumbnail}></ThumbNail>
          {/* eyes icons */}
          <Eyes completed={completed}></Eyes>
          <ProjectTitle id="project-title">{modal.name}</ProjectTitle>
        </GridCell>
      ))}
    </>
  );
};
const ThumbNail = memo(({ thumbnail }) => {
  return (
    <picture className="w-full">
      <source media="(max-width:645px )" srcSet={thumbnail.mobile} />
      <LazyLoadImage
        className="sm:object-cover w-full"
        alt={thumbnail.pc}
        src={thumbnail.pc}
        placeholder={
          <div className="flex items-center justify-center p-24">
            <Spinner size="xl" className="!p-24 text-4xl"></Spinner>
          </div>
        }
      />
    </picture>
  );
});

const Eyes = memo(({ completed }) => {
  return (
    <EyesWrapper $isReady={completed}>
      <Eye variants={closeEyeVariants}>
        <PiEyeClosedLight />
      </Eye>
      <Eye variants={openEyeVariants}>
        <LiaEyeSolid />
      </Eye>
    </EyesWrapper>
  );
});

const ProjectTitle = tw.div`
sm:block
px-4
hidden
absolute
left-1/2 
duration-700
top-10 
-translate-x-1/2
transition-all
opacity-0
bg-[#1f1f1f]
`;

const GridCell = tw(motion.div)`
flex
relative
overflow-hidden
transition-all
duration-500
rounded-xl
[&>picture>img]:hover:scale-[1.05]
[&>picture>img]:brightness-[.8]
[&>picture>img]:hover:brightness-[.5]
[&>.eyes-wrapper]:hover:!shadow-[0px_0px_10px_1px_#0aff9da3]
[&_#project-title]:hover:opacity-100
`;

const EyesWrapper = tw.div`
${({ $isReady }) => (!$isReady ? "hidden" : "flex")}
eyes-wrapper
absolute 
w-full 
justify-center 
py-4 items-center 
top-1/2 
bg-[#1f1f1f] 
-translate-y-1/2
transition-all
duration-500
`;

const Eye = tw(motion.span)`
absolute
text-4xl
text-[#0aff9d]
`;
const openEyeVariants = {
  initial: { opacity: [0.5, 0] },
  animate: { opacity: 0 },
  whileHover: {
    opacity: [0, 0, 0.5, 1],
    transition: {
      repeat: Infinity,
      repeatDelay: 1.1,
      duration: 0.5,
    },
  },
};

const closeEyeVariants = {
  initial: { opacity: [0.5, 1] },
  animate: { opacity: 1 },
  whileHover: {
    opacity: [1, 1, 0.5, 0],
    transition: {
      repeat: Infinity,
      repeatDelay: 1.1,
      duration: 0.5,
    },
  },
};
const projectsPlace = ["1/1/-1/2", "1/2/3/3", "3/2/-1/-1"];

export default Project;
