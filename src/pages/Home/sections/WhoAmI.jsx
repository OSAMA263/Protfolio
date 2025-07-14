import { motion } from "framer-motion";
import tw from "tailwind-styled-components";
import { AiOutlineDownload } from "react-icons/ai";
import PDF from "/CV.pdf";
export default function WhoAmI() {
  return (
    <Section>
      <Line className="text-4xl font-bold md:text-7xl">Hi</Line>
      <p className="underline underline-offset-4">I'm Osama Khaled</p>
      <Line>
        a{" "}
        <Frontend>
          <div className="absolute w-full block bottom-0 h-1/2 -z-10 bg-[#12a369] right-0 transition-all"></div>
          front-end
        </Frontend>{" "}
        developer.
      </Line>
      <a
        className="sm:mt-6"
        href={PDF}
        download="CV"
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
  initial: { scale: 1, boxShadow: "0px 0px 10px 0.1px transparent" },
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
sm:p-2
p-1
rounded-md
justify-center
items-center 
gap-x-1
`;

const Section = tw(motion.div)`
max-[350px]:text-base
md:text-lg
!text-sm
text-balance
sm:gap-y-4
gap-y-3
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
relative
text-[#e2e2e2] 
[&>div]:hover:h-full
hover:text-[#000000]
hover:font-semibold
transition-all
p-1
`;
