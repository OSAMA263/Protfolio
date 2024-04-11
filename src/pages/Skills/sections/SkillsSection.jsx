import tw from "tailwind-styled-components";
import { useState } from "react";
import RightContent from "./RightContent";
import { motion } from "framer-motion";
import { Languages_Tools } from "./data";
// import TextAnimation from "../../../components/TextAnimation";

export default function SkillsSection() {
  const [selectedLang, setSelectedLang] = useState("");

  const handleMouseEner = (logo) => {
    setSelectedLang(logo);
  };

  return (
    <Wrapper>
      <div className="space-y-4 lg:space-y-8 ">
        {Languages_Tools.map((lang, i) => (
          <LeftSection
            {...{ selectedLang, handleMouseEner, lang, i }}
            key={"lang" + i}
          ></LeftSection>
        ))}
      </div>
      <RightContent selectedLang={selectedLang} />
    </Wrapper>
  );
}
// ------------LEFT CONTANT--------
const LeftSection = (props) => {
  const { selectedLang, handleMouseEner, lang, i } = props;
  const { p, logos, logo_name } = lang;

  return (
    <motion.div
      initial="initial"
      whileInView="whileInView"
      viewport= {{ once: true }}
      className="flex flex-col text-xs gap-y-3"
    >
      <motion.div
        variants={Logo_wrapper_variants}
        custom={i}
        className="flex flex-wrap w-full py-2 overflow-hidden tracking-widest"
      >
        <span className="inline-block text-lg font-semibold max-[350px]:text-sm">
          {p}
        </span>
      </motion.div>
      {/* loggo */}
      <LogosRow variants={Logo_wrapper_variants} custom={i}>
        {logos.map((logo, j) => (
          <Logo
            variants={logoAnimation}
            $selectedLang={selectedLang}
            $langName={logo_name[j]}
            onClick={() => handleMouseEner(logo_name[j])}
            key={j}
          >
            <img alt={logo} loading="lazy" className="rounded-2xl" src={logo} />
          </Logo>
        ))}
      </LogosRow>
    </motion.div>
  );
};

const logoAnimation = {
  initial: { opacity: 0, x: "100%" },
  whileInView: (j) => ({
    opacity: 1,
    x: 0,
    // transition: { duration: 0.2, delay: 0.4 * j },
  }),
  viewport: { once: true },
};
const Logo_wrapper_variants = {
  initial: {
    opacity: 0,
  },
  whileInView: (i) => ({
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.3 * i + (i + 1 * 1.6),
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  }),
  viewport: { once: true },
};

const LogosRow = tw(motion.div)`
flex
flex-wrap
md:gap-4
gap-1
`;

const Logo = tw(motion.div)`
${({ $selectedLang, $langName }) =>
  $selectedLang === $langName && "!bg-[#4f4f4f] [&>img]:scale-[1.3]"}
logo-wrapper 
relative 
overflow-hidden
[&>img]:hover:scale-[1.3]
transition-all
duration-500
[&>img]:p-2
sm:[&>img]:w-[48px]
[&>img]:w-[40px]
border
border-gray-700
rounded-2xl
`;

const Wrapper = tw.div`
grid
lg:grid-cols-2
lg:gap-y-0 
gap-y-10 
gap-x-2
`;

// const SkillsTitle = ({ line }) => {
//   return line
//     .replaceAll("-", `${"\u00A0"}`)
//     .split(" ")
//     .map((word, word_i) => (
//       <p
//         className="inline-block text-lg font-semibold max-[350px]:text-sm"
//         key={word_i}
//       >
//         {word.split("").map((letter, letter_i) => (
//           <TextAnimation
//             Y={"6%"}
//             opaSpeed={0.09}
//             opaDelay={0.2}
//             opaWaitTime={1.4}
//             letter_i={letter_i}
//             key={letter_i}
//           >
//             {letter}
//           </TextAnimation>
//         ))}
//       </p>
//     ));
// };
