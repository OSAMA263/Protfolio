import { motion, useInView, useScroll } from "framer-motion";
import React, { useRef } from "react";
import tw from "tailwind-styled-components";

export default function PageWrapper({ children, id }) {
  const page = useRef(null);
  const isInView = useInView(page, { once: true });

  const projectsRef = useRef(null);
  const { scrollYProgress} = useScroll({
    target: projectsRef,
    offset: ["0 0", "1 1"],
    layoutEffect: false
  });

  return (
    <Section ref={id === "projects" ? projectsRef : null} $id={id} id={id}>
      <RevealPage ref={page} {...motionVariants} $id={id}>
        {isInView &&
          React.Children.map(children, (child) =>
            React.cloneElement(child, {
              scrollProgress: id === "projects" ? scrollYProgress:undefined,
            })
          )}
      </RevealPage>
    </Section>
  );
}

const motionVariants = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.4, delay: 0.4 },
  viewport: { once: true },
};

const RevealPage = tw(motion.div)`
${(p) =>
  p.$id === "home"
    ? "!w-[100%] !mx-0"
    : p.$id === "projects"
    ? "!my-0 !sticky !h-[98vh] top-4"
    : ""}
  flex
  flex-col
  h-[98%]
  justify-center
  my-auto
  lg:w-[80%]
  w-full
  lg:ms-[15%]
  lg:me-[10%]
  lg:mx-0
  mx-14
  max-sm:mx-2
  items-center
  overflow-hidden
  relative
`;

const Section = tw(motion.section)`
flex
justify-center
scroll-snap
${({ $id }) => ($id === "projects" ? "sm:!h-[400vh] !items-start mt-4" : "")}
`;
