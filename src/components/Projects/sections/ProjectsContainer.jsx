import tw from "tailwind-styled-components";
import { useState } from "react";
import { PiEyeClosedLight } from "react-icons/pi";
import { LiaEyeSolid } from "react-icons/lia";
import Modal from "./modal/Modal";

export default function ProjectsContainer() {
  const [selectedProject, setSelectedProject] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handle_project_click = (i) => {
    setSelectedProject(i);
    setIsOpen(true);
  };

  return (
    <>
      <Wrapper>
        {projectsPlace.map((pro, i) => (
          <Project
            style={{ gridArea: pro.place }}
            onClick={() => handle_project_click(i)}
            key={i}
          >
            {/* pictures */}
            <picture className="object-cover w-full">
              <source
                media="(max-width:645px )"
                srcSet={`projects/mobile/thumbnail/project${i}.webp`}
              />
              <img
                loading="lazy"
                className="object-cover w-full"
                alt={`project` + i}
                src={`projects/pc/thumbnail/project${i}.webp`}
              />
            </picture>
            {/* eyes icons */}
            <EyesWrapper>
              <PiEyeClosedLight id="closedEye" />
              <LiaEyeSolid id="openedEye" />
            </EyesWrapper>
          </Project>
        ))}
      </Wrapper>
      {/* modal */}
      <Modal
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        projectInd={selectedProject}
      />
    </>
  );
}
// ---------------

const Wrapper = tw.div`
h-[60vh]
xl:w-[80%]
m-auto
grid
grid-cols-5
grid-rows-6
overflow-hidden
gap-2
sm:p-4
`;

const Project = tw.div`
flex
relative
overflow-hidden
transition-all
duration-500
rounded-xl
[&>picture>img]:hover:scale-[1.02]
[&>picture>img]:brightness-[.5]
[&>picture>img]:hover:brightness-[.9]
[&_#openedEye]:hover:!opacity-100
[&_#closedEye]:hover:!opacity-0
[&>.eyes]:hover:!shadow-[0px_0px_5px_.5px_#0aff9da3]
`;

const EyesWrapper = tw.div`
eyes
absolute 
w-full 
flex
justify-center 
py-4 items-center 
top-1/2 
bg-[#1f1f1f] 
-translate-y-1/2
transition-all
duration-500
[&>svg]:text-4xl
[&>svg]:absolute
[&>#closedEye]:opacity-100
[&>#openedEye]:opacity-0
[&>#openedEye]:text-[#0aff9d]
`;

const projectsPlace = [
  { place: "1/1/5/3" },
  { place: "1/3/3/7" },
  { place: "5/1/7/3" },
  { place: "3/3/7/7" },
];
