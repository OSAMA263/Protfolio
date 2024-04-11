import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import tw from "tailwind-styled-components";

export default function PageWrapper({ children, id }) {
  const page = useRef(null);
  const isInView = useInView(page, { once: true });

  return (
    <Section id={id}>
      <RevealPage ref={page} {...motionVariants} $id={id}>
        {isInView && children}
      </RevealPage>
    </Section>
  );
}

const motionVariants = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: .4, delay: 0.6 },
  viewport: { once: true },
};

const RevealPage = tw(motion.div)`
${(p) => p.$id === "home" && "!w-[100%] !mx-0"}
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
  scroll-snap
  flex
  justify-center
`;
