import tw from "tailwind-styled-components";
import { motion } from "framer-motion";
export default function SectionHeader({ children }) {
  return <H1 {...H1Variants}>{children}</H1>;
}

const H1Variants = {
  initial: {
    x: "-100%",
  },
  whileInView: {
    x: 0,
    transition: { x: { duration: 2, delay: 1.2 } },
  },
  whileHover: {},
};

const H1 = tw(motion.h1)`
text-2xl
max-[350px]:text-lg
mb-5
font-[900]
`;
