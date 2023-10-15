import tw from "tailwind-styled-components";
import { motion } from "framer-motion";

const Curtains = () => {
  return (
    <Wrapper>
      {[1, 2, 3, 4].map((col) => (
        <motion.div
          {...CurtainColsAnimation}
          custom={col}
          className="bg-[#25272a] w-full"
          key={col}
        ></motion.div>
      ))}
    </Wrapper>
  );
};

export default Curtains;

const CurtainColsAnimation = {
  initial: { y: "0%" },
  animate: (i) => ({
    y: "100%",
    transition: { delay: i * 0.2 + 3.9, duration: 0.6 },
  }),
};

const Wrapper = tw.div`
grid
grid-cols-4
w-full 
z-[69] 
absolute 
h-full
`;
