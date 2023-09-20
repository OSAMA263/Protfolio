import tw from "tailwind-styled-components";
import { AnimatePresence, motion } from "framer-motion";

export default function RightContent({ selectedLang }) {

  return (
    <Wrapper>
      <AnimatePresence mode="popLayout">
        <Information key={selectedLang} {...Information_variants}>
          {info[selectedLang]}
        </Information>
      </AnimatePresence>
    </Wrapper>
  );
}

const Information_variants = {
  initial: {
    y: "-100%",
  },
  animate: { y:  "0%" },
  exit: { y: "200%" },
  transition: { duration: 1,},
};

const Information = tw(motion.p)`
border-l-[1px]
px-2
text-xl
`;

const Wrapper = tw.div`
relative
xl:w-[60%]
max-lg:w-[85%] 
lg:w-[99%]
text-2xl 
my-auto
overflow-hidden
block
max-[375px]:!hidden
`;

const info = {
  html: "I have a good command of HTML for organizing web pages and generating meaningful content that can be accessed by users.",
  github:
    "I am good at deploying projects on the platform and applying GitHub for smooth and secure projects.",
  git: "I am skilled with Git. although I have not worked with a team, I am aware of how to handle code changes.",
  reactjs:
    "I am well-versed in React, proficient in creating reusable components and managing application state using hooks and Redux.",
  css3: "I'm skilled at using CSS to design web pages and create visually pleasing layouts that improve the user experience as a whole.",
  javascript:
    " have good experience employing JavaScript to introduce interactivity functionality into web pages, resulting in dynamic user interfaces and dealying with APIs.",
  bootstrap:
    "I am proficient in using Bootstrap. It is quick and straightforward to develop simple websites, and I used it frequently when I first began programming.",
  tailwindcss:
    "I have a lot of experience utilizing Tailwind. I also use Bootstrap, but I prefer Tailwind because it gives me more design flexibility. and I mostly utilize it for my projects.",
  sass: "I respect Sass as a language, and I have used it before, but I prefer to use CSS . The code become unreadable. I am not a fan of this dumb language.",
  vite: "Working with Vite and utilizing its ability to create React websites and quickly deploy them on platforms, I have greatly improved my experience.",
  chakraUi:
    "I'm good at using Chakra-UI to build components and pages that are ready to use and have a great, simple interface and easy to use.",
  redux: "I am good at using Redux and ReduxTollkit as a global data store.",
  framerMotion:
    "I'm quite skilled at using frame motion. I can create excellent page animation and styling. I usually use this library along with Tailwind.",
  styledComponents:
    "I'm familiar with styled components it's a very helpful library that helps me write cleaner, easier to modify code. I frequently use the NPM package called 'Tailwind-styled-components' because it works nicely with Tailwind.",
};
