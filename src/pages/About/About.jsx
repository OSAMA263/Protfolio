/* eslint-isable react/no-unescaped-entities */
import tw from "tailwind-styled-components";
import { motion } from "framer-motion";
import PageWrapper from "../../shared/PageWrapper";
import SectionHeader from "../../shared/SectionHeader";
import ContentWrapper from "../../shared/ContentWrapper";
import TextAnimation from "../../components/TextAnimation";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function About() {
  return (
    <PageWrapper id="about">
      <ContentWrapper>
        <Wrapper>
          <Text>
            <SectionHeader>About Me</SectionHeader>
            <TextPoints />
          </Text>
          {/* ------------ */}
          <ImgWrapper>
            <LazyLoadImage
              effect="blur"
              wrapperProps={{ style: { transitionDelay: "0s" } }}
              src="about-img.avif"
              className="object-cover w-full xl:h-full h-[30vh] shadow-xl
              shadow-black"
              alt="about-img"
            />
          </ImgWrapper>
        </Wrapper>
      </ContentWrapper>
    </PageWrapper>
  );
}

const TextPoints = () => {
  let letter_i = 0;

  return (
    <ul className="flex flex-col sm:gap-y-4 gap-y-3 h-full">
      {text.map((line, line_i) => (
        <li
          className="w-fit flex 2xl:leading-relaxed xl:leading-normal lg:leading-tight"
          key={line_i}
        >
          <TextAnimation
            opaDelay={0.01}
            opaSpeed={0.06}
            letter_i={letter_i++}
            opaWaitTime={1.6}
          >
            -{"\u00A0"}
          </TextAnimation>
          {/* words */}
          <div>
            {line
              .replaceAll(" ", `${"\u00A0"}`)
              .split("-")
              .map((word, word_i) => (
                <p className="inline-block" key={word_i}>
                  {word.split("").map((letter, i) => (
                    // letter
                    <TextAnimation
                      opaDelay={0.01}
                      opaSpeed={0.06}
                      opaWaitTime={1.6}
                      letter_i={letter_i++}
                      key={i}
                    >
                      {letter}
                    </TextAnimation>
                  ))}
                </p>
              ))}
          </div>
        </li>
      ))}
    </ul>
  );
};
const Wrapper = tw(motion.div)`
about
grid
xl:gap-x-10
gap-x-2
xl:grid-cols-2
xl:gap-y-0
items-center
gap-y-6
max-[375px]:!grid-rows-1
max-[350px]:text-sm
`;

const Text = tw(motion.div)`
flex
flex-col
lg:tracking-wide
max-[380px]:space-y-2
justify-start
`;

const ImgWrapper = tw(motion.div)`
w-full
block
max-h-fit
max-[640px]:hidden
`;

const text = [
  "Hello -again!",
  "Graduated -from -Delta -Academy -of -Science -with -a -bachelor's -degree -in -information -systems.",
  "As -a -FrontEnd -developer, -I -use -React -alongside -with -important -libraries -like -Tailwind -for -styling -and -ChakraUI -for -superior -user -interface -elements.",
  "I -mostly -concentrate -on -useing -Framer -Motion -primarily -to -create -charming -visuals -for -my -web -development -projects.",
  "I -am -constantly -learning -new -languages -and -tools -and -not -just -relying -on -the -knowledge -i -already -have.",

  // "I -am -looking -for -a -job -where -I -can -apply -my -knowledge -and -provide -cool -ass -websites -and -gain -guidance -from -experienced -colleagues.",
];
