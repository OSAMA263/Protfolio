import { createStandaloneToast } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Context } from "../context/ContextProvider";
import tw from "tailwind-styled-components";
import music from "/8bit-music.mp3";

const sound = new Audio(music);

export const TheRealMe = () => {
  const { toast } = createStandaloneToast();
  const { easterEgg, setEasterEgg } = useContext(Context);

  useEffect(() => {
    if (easterEgg) {
      toast({
        duration: 3000,
        position: "top",
        render: () => (
          <div className="bg-gray-800 w-fit p-2">
            <p>Easter egg was found :)</p>
          </div>
        ),
      });
      sound.play();
      document.body.style.overflow = "hidden";
    } else {
      sound.pause();
      sound.currentTime = 0;
      document.body.style.overflow = "auto";
    }
  }, [easterEgg]);

  return <Page {...{ easterEgg, setEasterEgg }} />;
};
// make the easter eagg show once
const Page = ({ easterEgg, setEasterEgg }) => {
  const [sure, setSure] = useState("leave?");
  const handleClick = () => {
    setSure("sure?");
    if (sure === "sure?") {
      sound.currentTime = 0;
      setEasterEgg(false);
    }
  };

  return (
    <Container $opend={easterEgg}>
      <div className="w-[80%] m-auto relative divide-y h-[90%] flex flex-col justify-evenly">
        <button onClick={handleClick} className="absolute top-0 right-0 h-fit">
          {sure}
        </button>
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="font-bold underline text-xl">What i like:</span>
            <p>
              Sooooo, the actual stuff that I enjoy is music, videogames, anime,
              and I used to draw like a maniac.
            </p>
          </div>
          <div className="space-y-2">
            <span className="font-bold underline text-xl">
              What i dont like:
            </span>
            <p>Humans</p>
          </div>
        </div>
        {/* lists */}
        <div className="grid lg:grid-cols-3 gap-10">
          {theStuff.map(({ title, list, header }) => (
            <div className="space-y-4" key={title}>
              <h1>{header}</h1>
              <span className="font-bold underline text-lg block">
                {title}:
              </span>
              <ul>
                {list.map((item) => (
                  <li
                    className={
                      item.length > 30 ? "font-bold underline" : "list-disc"
                    }
                    key={item}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* gj lad */}
        <div>
          <h2>
            GJ ON FINDING THE HIDDEN TREASURE THINGY, idk, <br /> heres my
            secret{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/watch?v=SBOVkptjJhE&list=PL2X8sfba3pG0robKHaL3S30CWye2_QBzW&index=1"
            >
              playlist
            </a>{" "}
            to help you suffer less when you code.
          </h2>
        </div>
      </div>
    </Container>
  );
};

const Container = tw.div`
${({ $opend }) =>
  $opend ? "visible opacity-100 delay-[3s]" : "invisible opacity-0"}
bg-black
h-[100dvh]
overflow-auto
absolute
top-0
bg-[url('/spin-cat.gif')]
flex
items-center
z-[6969]
w-full
transition-opacity
select-text
[&_a]:text-[#0aff9d]
`;

const theStuff = [
  {
    title: "Music",
    header:
      "Most of the songs I listen to are from games, and they are all singles, so I'm just going to give you some of the artists I listen to.",
    list: [
      "Daughter",
      "My Chemical Romance",
      "Aurora",
      "Radiohead",
      "Slipknot",
      "Joji",
      "Andy black",
      "Mac Miller",
      "Of Monsters And Men",
      "Heilung",
      "artists that make me feel silly and put a smile on my face.",
      "Siames",
      "Gorillaz",
      "Red Hot Chilli Pepper",
    ],
  },

  {
    title: "Games",
    header:
      "I love 2D, Metrodvinia, and story-rich games, and I played a lot of games, but I'm just going to list the ones that got stuck in my head.",
    list: [
      "Gris",
      "Spiritfarer",
      "Outer Wilds",
      "What Remains of Edith Finch",
      "Disco Elysium",
      "Fear & Hunger",
      "Blasphemous",
      "Before Your Eyes",
      "Fire Watch",
      "Soma",
      "Ghost Song",
      "Kentucky Route Zero",
      "Coffee Talk",
    ],
  },
  {
    title: "Anime",
    header:
      "dont you fucking judge me, we all got a thing that we love and other ppl dont like it",
    list: [
      "Clannad: After Story",
      "The Garden of Words",
      "D-Frag",
      "WataMote",
      "Josee, the Tiger and the Fish",
      "Chainsaw Man",
      "Violet Evergarden",
      "Asobi Asobase",
      "Orb",
      "Barakamon",
      "Wagnaria",
      "To Your Eternity",
      "A Silent Voice",
    ],
  },
];
