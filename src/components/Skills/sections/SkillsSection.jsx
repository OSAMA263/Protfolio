import tw from "tailwind-styled-components";
import { useState } from "react";
import RightContent from "./RightContent";
import { motion } from "framer-motion";
import { Languages_Tools } from "./data";
import { Languages_header } from "./LanguagesHeader";
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
            handleMouseEner={handleMouseEner}
            lang={lang}
            i={i}
            key={"lang" + i}
          ></LeftSection>
        ))}
      </div>
      <RightContent selectedLang={selectedLang} />
    </Wrapper>
  );
}
// ------------LEFT CONTANT--------
const LeftSection = ({ lang, handleMouseEner, i }) => {
  const { p, logos, logo_name } = lang;

  return (
    <motion.div className="flex flex-col gap-y-3">
      <div className="flex w-full py-2 overflow-hidden tracking-widest">
        <Languages_header line={p}></Languages_header>
      </div>
      {/* loggo */}
      <LogosRow {...Logo_wrapper_variants} custom={i}>
        {logos.map((logo, i) => (
          <Logo onClick={() => handleMouseEner(logo_name[i])} key={i}>
            <img alt={logo} width={48}loading="lazy" height={48} src={logo} />
          </Logo>
        ))}
      </LogosRow>
    </motion.div>
  );
};
const LogosRow = tw(motion.div)`
flex 
flex-wrap
md:gap-x-4
md:gap-y-4
gap-x-1
gap-y-1
`;

// ------------------

const Logo = tw.div`
logo-wrapper 
relative 
overflow-hidden
[&>img]:hover:scale-[1.3]
transition-all
duration-500
[&>img]:p-2
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
