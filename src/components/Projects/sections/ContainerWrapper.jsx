import tw from "tailwind-styled-components";
import { motion } from "framer-motion";
import ProjectsContainer from "./ProjectsContainer";

export default function ContainerWrapper() {
  return (
    <Wrapper {...wrapper_variants}>
      <ProjectsContainer></ProjectsContainer>
    </Wrapper>
  );
}

const wrapper_variants = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1, transition: { opacity: { delay: 3.3 } } },
  viewport: { once: true },
};

const Wrapper = tw(motion.div)` 
flex
justify-center
`;
