import tw from "tailwind-styled-components";
import { useState } from "react";
import RightContent from "./RightContent";
import LetterReveal from "../../../Global-Comps/futures/Text_animation";
import { motion } from "framer-motion";
import {Languages_Tools} from"./data"
export default function SkillsSection() {
  const [selectedLang, setSelectedLang] = useState("");

  const handleMouseEner = (logo) => {
    setSelectedLang(logo);
  };

  return (
    <Wrapper>
      <div className="lg:space-y-8 space-y-4 ">
        {Languages_Tools.map((lang, i) => (
          <LeftSection
            handleMouseEner={handleMouseEner}
            lang={lang}
            i={i}
            key={i}
          ></LeftSection>
        ))}
      </div>
      <RightContent selectedLang={selectedLang} />
    </Wrapper>
  );
}

// ------------LANGUAGES TITLE HEADER------------
const Languages_header = ({ line }) => {
  return line
    .replaceAll("-", `${"\u00A0"}`)
    .split(" ")
    .map((word, word_i) => (
      <p
        className="inline-block text-lg -tracking-tight font-semibold"
        key={word_i}
      >
        {word.split("").map((letter, letter_i) => (
          <LetterReveal
            Y={30}
            opaSpeed={1.2}
            opaDelay={0.2}
            opaWaitTime={3}
            letter_i={letter_i}
            key={letter_i}
          >
            {letter}
          </LetterReveal>
        ))}
      </p>
    ));
};
// ------------LEFT CONTANT--------
const LeftSection = ({ lang, handleMouseEner, i }) => {
  const { p, logos, logo_name } = lang;

  return (
    <motion.div className="flex flex-col gap-y-3">
      <div className="flex py-2 tracking-widest overflow-hidden w-full">
        <Languages_header line={p}></Languages_header>
      </div>
      {/* loggo */}
      <LogosRow {...Logo_wrapper_variants} custom={i}>
        {logos.map((logo, i) => (
          <Logo onClick={() => handleMouseEner(logo_name[i])} key={i}>
            <img alt={logo} loading="lazy" src={logo} />
          </Logo>
        ))}
      </LogosRow>
    </motion.div>
  );
};
const LogosRow = tw(motion.div)`
flex 
gap-x-4
flex-wrap
gap-y-4
`;

// ------------------

const Logo = tw.div`
cursor-pointer 
logo-wrapper 
relative 
overflow-hidden
hover:scale-110
transition-all
duration-500
sm:[&>img]:w-auto
[&>img]:w-[80%]
`;

const Wrapper = tw.div`
grid
lg:grid-cols-2
lg:gap-y-0 
gap-y-10 
gap-x-2
`;

const Logo_wrapper_variants = {
  initial: {
    opacity: 0,
  },
  whileInView: (i) => ({
    opacity: 1,
    transition: { duration: 0.4, delay: 2 * i + 3.3 },
  }),
  viewport: { once: true },
};

