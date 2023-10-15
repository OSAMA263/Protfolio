import LetterReveal from "../../../Global-Comps/futures/Text_animation";

export const Languages_header = ({ line }) => {
  return line
    .replaceAll("-", `${"\u00A0"}`)
    .split(" ")
    .map((word, word_i) => (
      <p className="inline-block text-lg font-semibold" key={word_i}>
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