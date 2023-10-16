/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import tw from "tailwind-styled-components";
import { AiOutlineDownload } from "react-icons/ai";
import PDF from "../../../../public/Osama-Khaled.pdf";

export default function WhoAmI() {
  return (
    <Section>
      <Line>
        <small className="text-4xl font-bold md:text-6xl">Hi</small>, I'm Osama
        Khaled,
      </Line>
      <Line>
        a <Frontend>front-end</Frontend> developer.
      </Line>
      <a
        className="mt-6"
        href={PDF}
        download="Osama-Khaled"
        target="_blank"
        rel="noreferrer"
      >
        <Button {...HeartBeat}>
          Get Resume <AiOutlineDownload />
        </Button>
      </a>
    </Section>
  );
}

const HeartBeat = {
  whileHover: {
    scale: [1, 1.6, 1.6, 1],
    boxShadow: [
      "0px 0px 10px 0.1px transparent",
      "0px 0px 80px 2px #0aff9d",
      "0px 0px 80px 2px #0aff9d",
      "0px 0px 15px 0.1px #0aff9d",
    ],
  },
  transition: { duration: 0.2, repeat: Infinity, repeatDelay: 0.9 },
};

const Button = tw(motion.button)`
border-[2px]
border-[#858994]
font-semibold
hover:bg-[#0aff9d]
hover:text-black
hover:border-transparent
flex
p-3
rounded-full
justify-center
items-center 
gap-x-1
`;

const Section = tw(motion.div)`
max-[350px]:text-base
md:text-lg
!text-sm
text-balance
gap-y-4
flex
justify-center
items-center
flex-col
absolute
z-[52]
top-1/2
left-1/2
-translate-y-1/2
-translate-x-1/2
p-2
text-center
sm:w-fit
w-[90%]
who-wrapper
`;
const Line = tw.h1`
transition-all
font-extrabold
`;

const Frontend = tw.span`
text-[#030202] 
bg-[#06b26d]
hover:bg-[#545d6b]
hover:text-[#eaeaea]
hover:font-semibold
transition-all
p-1
`;
