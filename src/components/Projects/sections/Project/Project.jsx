import tw from "tailwind-styled-components";
import { PiEyeClosedLight } from "react-icons/pi";
import { LiaEyeSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import Curtains from "./Curtains";
import { memo } from "react";

const Project = (props) => {
  const { handleProjectClick, slide } = props;

  const handleClick = (completed, slide, i) => {
    completed && handleProjectClick(slide[i]);
    console.log();
  };

  return (
    <>
      {slide.map(({ completed, thumbnail }, i) => (
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
        </GridCell>
      ))}
    </>
  );
};
const projectsPlace = ["1/1/-1/2", "1/2/3/3", "3/2/-1/-1"];

const ThumbNail = memo(({ thumbnail }) => {
  return (
    <picture className="w-full">
      <source media="(max-width:645px )" srcSet={thumbnail.mobile} />
      <img
        loading="lazy"
        className="object-cover w-full"
        alt={thumbnail.pc}
        src={thumbnail.pc}
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

export default Project;
