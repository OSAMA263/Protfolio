import tw from "tailwind-styled-components";
import { AnimatePresence, motion } from "framer-motion";

export default function RightContent({ selectedLang }) {
  return (
    <Wrapper>
      <AnimatePresence mode="wait">
        <Information
          layout={selectedLang}
          key={selectedLang}
          {...Information_variants}
        >
          {info[selectedLang]}
        </Information>
      </AnimatePresence>
    </Wrapper>
  );
}

const Information_variants = {
  initial: {
    opacity: 0,
  },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 },
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
max-[1023px]:!hidden
`;

const info = {
  html: "I have a good command of HTML for organizing web pages and generating meaningful content that can be accessed by users.",
  github:
    "I am good at deploying projects on the platform and applying GitHub for smooth and secure projects.",
  git: "Command of Git for version control, allowing for effective collaboration and tracking code changes.",
  reactjs:
    "I am well-versed in React, proficient in creating reusable components and managing application state using hooks and Redux.",
  css3: "I'm skilled at using CSS to design web pages and create visually pleasing layouts that improve the user experience as a whole.",
  javascript:
    " have good experience employing JavaScript to introduce interactivity functionality into web pages, resulting in dynamic user interfaces and dealying with APIs.",
  bootstrap:
    "I am proficient in using Bootstrap. It is quick and straightforward to develop simple websites, and I used it frequently when I first began programming.",
  tailwindcss:
    "I have a lot of experience utilizing Tailwind. I used to utilize Bootstrap, but I prefer Tailwind because it gives me more design flexibility. and I mostly utilize it in my projects.",
  sass: "I respect Sass, and I have used it in my previous projects, but I prefer to use tailwind .You have to make separate file for every component. And i am not a fan of that.",
  vite: "Working with Vite and utilizing its ability to create React websites and quickly deploy them on platforms, I have greatly improved my experience.",
  chakraUi:
    "I'm good at using Chakra UI, a component library for React, to create accessible and customizable user interfaces.",
  redux: "I am good at using Redux and ReduxTollkit as a global data store.",
  framerMotion:
    "I'm quite skilled at using frame motion. I can create excellent page animation and styling. I usually use this library along with Tailwind.",
  styledComponents:
    "Competent in using Styled Components to encapsulate styles within React components for improved modularity.",
  formik:
    "I'm proficient in Formik, having used it extensively in my projects to streamline form management and validation.",
  swiper:
    "I am well-versed in Swiper, a popular library for creating creating responsive and touch-enabled sliders and carousels.",
  typescript:
    "I think it's a powerful language if you're working with a team on a project. It prevents a lot of mistakes from happening. Otherwise,Overrated af i could spend more time writing types than I would fixing bugs if I used JS.",
};
