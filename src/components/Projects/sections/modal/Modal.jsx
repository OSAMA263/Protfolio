import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { MdCloseFullscreen } from "react-icons/md";
import { RxExternalLink, RxGithubLogo } from "react-icons/rx";
import tw from "tailwind-styled-components";
import Slider from "./Slider";
import { projectsDetails } from "./data";

export default function Modal(props) {
  const { projectInd, openModal, setOpenModal } = props;

  const handle_close_modal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <AlertDialog isCentered isOpen={openModal}>
        <AlertDialogOverlay bg="blackAlpha.800">
          <AlertDialogContent maxW={1200} className="!bg-transparent">
            {/* header */}
            <ModalHeader
              {...{ handle_close_modal, i: projectInd }}
            ></ModalHeader>
            {/* body */}
            <AlertDialogBody>
              <Slider projectInd={projectInd} />
            </AlertDialogBody>
            {/* footer */}
            <ModalFooter i={projectInd}></ModalFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
// ---------------
const ModalHeader = ({ handle_close_modal, i }) => {
  return (
    <AlertDialogHeader className="flex justify-between mb-2">
      {/* project links */}
      <div className="flex items-end justify-center">
        <h1 className="text-lg sm:text-2xl">
          {projectsDetails[i].name}
          {i == 2 && (
            <span className="hidden text-sm sm:inline">(my first project)</span>
          )}
          __{"\u00A0"}
        </h1>
        <Links href={projectsDetails[i].github} target="_blank">
          <RxGithubLogo />
        </Links>
        <Links href={projectsDetails[i].live} target="_blank">
          <RxExternalLink />
        </Links>
      </div>
      {/* CLOSE MODAL BUTTON */}
      <button
        className="[&>svg]:hover:text-gray-600"
        onClick={handle_close_modal}
        aria-label="close-modal"
      >
        <MdCloseFullscreen className="text-2xl md:text-3xl" />
      </button>
    </AlertDialogHeader>
  );
};
const Links = tw.a`
[&>svg]:hover:text-[#0aff9d] 
md:[&>svg]:text-3xl
[&>svg]:text-2xl
me-3
mt-2
`;
// ---------------
const ModalFooter = ({ i }) => {
  return (
    <AlertDialogFooter className="!justify-start gap-y-2 flex-col">
      <>
        <h1 className="text-gray-300">{projectsDetails[i].description}</h1>
        <div className="flex flex-wrap justify-center gap-1">
          {projectsDetails[i].languages.map((lang, ind) => (
            <Lang key={"lang" + ind}>{lang}</Lang>
          ))}
        </div>
      </>
    </AlertDialogFooter>
  );
};

const Lang = tw.span`
rounded-2xl
bg-gray-200
text-black
font-extrabold
p-1
`;
