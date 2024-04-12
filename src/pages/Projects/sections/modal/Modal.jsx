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
  const { onClose, isOpen } = props;
  const { modal, sliderImages } = props.selectedProject;

  return (
    <AlertDialog isCentered onClose={onClose} isOpen={isOpen}>
      <AlertDialogOverlay bg="blackAlpha.800">
        <AlertDialogContent maxW={900} className="!bg-transparent">
          {/* header */}
          <ModalHeader {...{ onClose, modal }}></ModalHeader>
          {/* body */}
          <AlertDialogBody className="max-[640px]:w-[80%] max-[640px]:mx-auto !p-0">
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
const ModalHeader = ({ onClose, modal }) => {
  return (
    <AlertDialogHeader className="flex justify-between mb-2 max-sm:!p-2">
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
        onClick={onClose}
        aria-label="close-modal"
      >
        <MdCloseFullscreen className="text-2xl md:text-3xl" />
      </button>
    </AlertDialogHeader>
  );
};

// ---------------
const ModalFooter = ({ modal }) => {
  console.log(modal.description);
  return (
    <AlertDialogFooter className="!justify-start gap-y-2 flex-col max-sm:!p-4">
      <>
        <ul className="list-disc [&>li::marker]:text-[#0aff9d] [&>li::marker]:sm:text-xl text-sm space-y-2">
          {modal.description.map((point, i) => (
            <li className="text-gray-300 [text-wrap:pretty]" key={"point" + i}>
              {point}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap justify-center gap-2">
          {modal.languages.map((lang, ind) => (
            <Lang key={"lang" + ind}>{lang}</Lang>
          ))}
        </div>
      </>
    </AlertDialogFooter>
  );
};

const Lang = tw.span`
rounded-md
bg-[#131214]
text-white
font-bold
p-1
`;

const Links = tw.a`
[&>svg]:hover:text-[#0aff9d] 
md:[&>svg]:text-3xl
[&>svg]:text-2xl
me-3
mt-2
`;
