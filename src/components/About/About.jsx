/* eslint-disable react/no-unescaped-entities */
import tw from "tailwind-styled-components";
import { motion } from "framer-motion";
import PageWrapper from "../../Global-Comps/futures/PageWrapper";
import SectionHeader from "../../Global-Comps/futures/SectionHeader";
import ContentWrapper from "../../Global-Comps/futures/ContentWrapper";
import LetterReveal from "../../Global-Comps/futures/Text_animation";

export default function About() {
  let letter_i = 0;
  return (
    <PageWrapper id="about">
      <ContentWrapper>
        <Wrapper>
          <Text>
            <SectionHeader>About Me</SectionHeader>
            {text.map((line, line_i) => (
              <div
                className="w-fit 2xl:leading-relaxed xl:leading-normal lg:leading-tight"
                key={line_i}
              >
                {line
                  .replaceAll("-", `${"\u00A0"}`)
                  .split(" ")
                  .map((word, word_i) => (
                    <p className="inline-block" key={word_i}>
                      {word.split("").map((letter, i) => (
                        <LetterReveal
                          opaDelay={0.01}
                          opaSpeed={0.06}
                          opaWaitTime={3}
                          letter_i={letter_i++}
                          key={i}
                        >
                          {letter}
                        </LetterReveal>
                      ))}
                    </p>
                  ))}
              </div>
            ))}
          </Text>
          {/* ------------ */}
          <ImgWrapper>
            <img
              src="about-img.avif"
              className="object-cover w-full"
              alt="about-img"
            />
          </ImgWrapper>
        </Wrapper>
      </ContentWrapper>
    </PageWrapper>
  );
}

const Wrapper = tw(motion.div)`
about
grid
xl:gap-x-10
gap-x-2
lg:grid-cols-2
lg:gap-y-0
gap-y-6
max-[375px]:!grid-rows-1
`;

const Text = tw(motion.div)`
flex
flex-col   
lg:tracking-wide
max-[380px]:space-y-2
justify-between
`;

const ImgWrapper = tw(motion.div)`
shadow-2xl
shadow-black
w-full
block
max-[375px]:hidden
`;

const text = [
  "Hello - again!",
  "As - a - frontend - developer, - ReactJS - is - a - tool - I - frequently - utilize - in - my - work, - aside - from - some - libraries - and - packages - like - Tailwind, - Framer - Motion, - and - others.",
  "I - graduated - from - Delta - Academy - of - Science - with - a - bachelor's - degree - in - information - systems.",
  "I - enjoy - finding - bugs - and - stay - up - all - night - to - fix - them - it's - so - much - fun...yep.",
  "I'm - trying - to - find - a - job - where - I - can - be - trusted, - learn - more, - enhance - my - skills, and - gain - guidance - from - more - experienced - employees.",
];
