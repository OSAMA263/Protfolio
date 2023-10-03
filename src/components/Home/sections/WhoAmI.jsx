/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import tw from "tailwind-styled-components";
import { AiOutlineDownload } from "react-icons/ai";
import PDF from "../../../../public/Osama-Khaled.pdf"

export default function WhoAmI() {
  return (
    <Section>
      <Line>
        <span className="text-4xl md:text-6xl">Hi</span>, my name is Osama
        Khaled.
      </Line>
      <Line>
        I'm a <Frontend>frontend</Frontend> developer
      </Line>
      <a
        href={PDF}
        download="Osama-Khaled"
        target="_blank"
        rel="noreferrer"
      >
        <Button>
          Get Resume <AiOutlineDownload />
        </Button>
      </a>
    </Section>
  );
}

const Button = tw.button`
border-[1px]
border-[#4b5563]
mt-4
font-semibold
hover:bg-[#0aff9d]
hover:shadow-[0px_0px_30px_2px_#0aff9d]
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
max-[400px]:text-base
md:text-lg
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
who-wrapper
`;
const Line = tw.h1`
transition-all
`;

const Frontend = tw.span`
text-[#eaeaea7c] 
bg-[#2f353e89]
hover:bg-[#4c535e]
hover:text-[#eaeaea]
hover:font-semibold
transition-all
p-1
`;
