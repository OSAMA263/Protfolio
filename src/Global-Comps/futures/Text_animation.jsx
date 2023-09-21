import tw from "tailwind-styled-components";
import { motion } from "framer-motion";

export default function LetterReveal(props) {
const {children, letter_i, Y = 0, opaDelay, opaSpeed, opaWaitTime}=props
  return (
    <Letter
      custom={{ letter_i, opaDelay, opaSpeed, opaWaitTime, Y }}
      {...LetterVarinats}
    >
      {children}
    </Letter>
  );
}

const Letter = tw(motion.span)`
inline-block 
`;

const LetterVarinats = {
  initial: ({ Y }) => ({
    y: Y,
    opacity: 0,
  }),
  whileHover: {
    opacity: [0, 1],
    transition: {
      duration: 0.3,
    },
  },
  whileInView: ({ letter_i, opaDelay, opaSpeed, opaWaitTime }) => ({
    y: 0,
    opacity: [0, 1],
    transition: {
      opacity: {
        duration: opaSpeed,
        delay: opaDelay * letter_i + opaWaitTime,
      },
      y: {
        duration: 1.2,
        delay: 0.2 * letter_i + 3,
      },
    },
  }),
  transition: {
    type: "tween",
  },
  viewport: { once: true },
};
