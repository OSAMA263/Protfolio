import { motion } from "framer-motion";
import tw from "tailwind-styled-components";

export default function ContentWrapper({ children }) {
  return (
    <motion.div className={` relative sm:space-x-5 space-x-1 w-full`}>
      <LineOnLeft {...LineVarinats}></LineOnLeft>
      {children}
    </motion.div>
  );
}
const LineVarinats = {
  initial: {
    height: 0,
  },
  whileInView: {
    height: "100%",
  },
  transition: {
    delay: .5,
    duration: 0.8,
  },
  viewport:{once:true}
};

const LineOnLeft = tw(motion.div)`
absolute 
w-[1px]
bg-[#cbccd2] 
`;
