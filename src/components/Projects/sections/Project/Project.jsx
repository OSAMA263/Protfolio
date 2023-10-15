import tw from "tailwind-styled-components";
import { PiEyeClosedLight } from "react-icons/pi";
import { LiaEyeSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import Curtains from "./Curtains";

const Project = (props) => {
  const { handleProjectClick } = props;

  return (
    <>
      {projectsPlace.map((pro, i) => (
        <Card
          initial="initial"
          whileHover="whileHover"
          animate="animate"
          onClick={() => handleProjectClick(i)}
          style={{ gridArea: pro.place }}
          key={i}
        >
          <Curtains></Curtains>
          {/* thumb nails */}
          <ThumbNail i={i}></ThumbNail>
          {/* eyes icons */}
          <Eyes></Eyes>
        </Card>
      ))}
    </>
  );
};

const Eyes = () => {
  return (
    <EyesWrapper>
      <Eye variants={closeEyeVariants}>
        <PiEyeClosedLight />
      </Eye>
      <Eye variants={openEyeVariants}>
        <LiaEyeSolid />
      </Eye>
    </EyesWrapper>
  );
};

const ThumbNail = ({ i }) => {
  return (
    <picture className="w-full">
      <source
        media="(max-width:645px )"
        srcSet={`projects/mobile/thumbnail/project${i}.webp`}
      />
      <img
        loading="lazy"
        className="object-cover w-full"
        alt={`project` + i}
        src={`projects/pc/thumbnail/project${i}.webp`}
      />
    </picture>
  );
};

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

const projectsPlace = [
  { place: "1/1/5/3" },
  { place: "1/3/3/7" },
  { place: "5/1/7/3" },
  { place: "3/3/7/7" },
];

const Card = tw(motion.div)`
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
eyes-wrapper
absolute 
w-full 
flex
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
