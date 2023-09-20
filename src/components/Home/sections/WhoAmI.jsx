/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import tw from "tailwind-styled-components";

export default function WhoAmI() {
  return (
    <Section>
      <h1 className="transition-all">Hi, my name is Osama.</h1>
      <h1 className="transition-all">
        I'm a <Frontend>frontend</Frontend> developer
      </h1>
    </Section>
  );
}

const Section = tw(motion.div)`
text-lg
text-balance
space-y-2
absolute
z-[52]
top-1/2
left-1/2
transition-all
-translate-y-1/2
-translate-x-1/2
bg-[radial-gradient(closest-side,#101010,#101010,#1010105f,transparent)]
p-2
myself-wrapper
[&>.myself-wrapper:has(span:is(:hover))_h1]:text-black
`;

const Frontend = tw.span`
text-[#101010] 
bg-[#09ff9d38]
p-1
font-semibold
transition-all
hover:bg-[#0aff9d]
hover:shadow-[0px_0px_10px_3px_#0aff9d]
`;
