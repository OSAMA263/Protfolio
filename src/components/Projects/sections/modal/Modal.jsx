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

export default function Modal(props) {
  const { openModal, setOpenModal } = props;
  const { modal, sliderImages } = props.selectedProject;

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <AlertDialog isCentered isOpen={openModal}>
      <AlertDialogOverlay bg="blackAlpha.800">
        <AlertDialogContent maxW={900} className="!bg-transparent">
          {/* header */}
          <ModalHeader {...{ handleCloseModal, modal }}></ModalHeader>
          {/* body */}
          <AlertDialogBody className="max-[640px]:w-[80%] max-[640px]:mx-auto">
            <Slider sliderImages={sliderImages} />
          </AlertDialogBody>
          {/* footer */}
          <ModalFooter modal={modal}></ModalFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
// ---------------
const ModalHeader = ({ handleCloseModal, modal }) => {
  return (
    <AlertDialogHeader className="flex justify-between mb-2">
      {/* project links */}
      <div className="flex flex-wrap items-end justify-center">
        <h1 className="text-lg sm:text-2xl">
          {modal.name}
          {modal.name === "E-commerce" && (
            <span className="hidden text-sm sm:inline">(my first project)</span>
          )}
          __{"\u00A0"}
        </h1>
        <div className="flex">
          <Links href={modal.github} target="_blank">
            <RxGithubLogo />
          </Links>
          <Links href={modal.live} target="_blank">
            <RxExternalLink />
          </Links>
        </div>
      </div>
      {/* CLOSE MODAL BUTTON */}
      <button
        className="[&>svg]:hover:text-gray-600"
        onClick={handleCloseModal}
        aria-label="close-modal"
      >
        <MdCloseFullscreen className="text-2xl md:text-3xl" />
      </button>
    </AlertDialogHeader>
  );
};

// ---------------
const ModalFooter = ({ modal }) => {
  return (
    <AlertDialogFooter className="!justify-start gap-y-2 flex-col">
      <>
        <h1 className="text-gray-300">{modal.description}</h1>
        <div className="flex flex-wrap justify-center gap-1">
          {modal.languages.map((lang, ind) => (
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

const Links = tw.a`
[&>svg]:hover:text-[#0aff9d] 
md:[&>svg]:text-3xl
[&>svg]:text-2xl
me-3
mt-2
`;
