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
            <p>Humans and brain.</p>
          </div>
        </div>
        {/* lists */}
        <div className="grid grid-cols-3 gap-10">
          {theStuff.map(({ title, list, header }) => (
            <div className="space-y-4" key={title}>
              <h1>{header}</h1>
              <span className="font-bold underline text-lg block">
                {title}:
              </span>
              <ul>
                {list.map((item) =>
                  item.includes("http") ? (
                    <li className="list-disc" key={item}>
                      <a target="_blank" rel="noreferrer" href={item}>
                        {item}
                      </a>
                    </li>
                  ) : (
                    <li
                      className={
                        item.length > 30 ? "font-bold underline" : "list-disc"
                      }
                      key={item}
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>
        {/* gj lad */}
        <div>
          <h2>
            GJ ON FINDING THE TREASURE THINGY, idk, <br /> heres some{" "}
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=SBOVkptjJhE&list=PL2X8sfba3pG0robKHaL3S30CWye2_QBzW&index=1&t=3181s">
              music
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
absolute
top-0
flex
items-center
z-[6969]
w-full
transition-opacity
[&_a]:text-[#0aff9d]
`;

const theStuff = [
  {
    title: "Music",
    header:
      "Most of the songs I listen to are from games, and they are all singles, so I'm just going to give you some of the artists I listen to.",
    list: [
      "Daughter",
      "Andy black",
      "Slipknot",
      "Joji",
      "MF Doom",
      "Gorillaz",
      "Mac Miller",
      "Heilung",
      "If I'm going to die, I gonna listen to these fuckers and die with a big smile on my face.",
      "Aurora",
      "My Chemical Romance",
      "Siames",
      "Pretty Vicious",
    ],
  },

  {
    title: "Games",
    header:
      "I love 2D, Metrodvinia, and story-rich games, and I played a lot of games, but I'm just going to list the ones that got stuck in my head.",
    list: [
      "Gris",
      "Spiritfarer",
      "Transistor",
      "What Remains of Edith Finch",
      "Blasphemous",
      "Ghost Song",
      "Before Your Eyes",
      "Fire Watch",
      "Kentucky Route Zero",
      "Journey",
      "Coffee Talk",
    ],
  },
  {
    title: "Anime",
    header: "yep.",
    list: ["https://myanimelist.net/animelist/toeshunter"],
  },
];
