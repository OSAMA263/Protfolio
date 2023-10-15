import tw from "tailwind-styled-components";
import { useState } from "react";
import Modal from "./modal/Modal";
import Project from "./Project/Project";

export default function ProjectsContainer() {
  const [selectedProject, setSelectedProject] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleProjectClick = (i) => {
    setSelectedProject(i);
    setOpenModal(true);
  };

  return (
    <>
      <Wrapper>
        <Project handleProjectClick={handleProjectClick}></Project>
      </Wrapper>
      {/* modal */}
      <Modal {...{ setOpenModal, openModal, projectInd: selectedProject }} />
    </>
  );
}

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
