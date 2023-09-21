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
  const { projectInd, isOpen, setIsOpen } = props;

  const handle_close_modal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <AlertDialog isCentered closeOnEsc closeOnOverlayClick isOpen={isOpen}>
        <AlertDialogOverlay>
          <AlertDialogContent maxW={1200} className={ModalContentStyles}>
            {/* header */}
            <AlertDialogHeader className="text-end mb-2">
              <button
                className="[&>svg]:hover:text-gray-600"
                onClick={handle_close_modal}
              >
                <MdCloseFullscreen className="text-3xl" />
              </button>
            </AlertDialogHeader>
            {/* body */}
            <AlertDialogBody className="!h-full">
              <Slider projectInd={projectInd} />
            </AlertDialogBody>
            {/* footer */}
            <AlertDialogFooter className="!justify-start mt-1">
              {/* project links */}
              <div className="flex justify-center items-end">
                <h1 className="text-xl">
                  {projectName[projectInd]}
                  {projectInd == 2 && "(my first project)"}_____{"\u00A0"}
                </h1>

                <Links href={projectURL[projectInd].github} target="_blank">
                  <RxGithubLogo />
                </Links>
                <Links href={projectURL[projectInd].live} target="_blank">
                  <RxExternalLink />
                </Links>
              </div>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

const ModalContentStyles = `!bg-transparent transition-all duration-1000 !h-full`;

const Links = tw.a`
[&>svg]:hover:text-[#0aff9d] 
[&>svg]:text-3xl
me-3
mt-2
`;

const projectName = ["Your Apartment", "Design", "Ecommerce", "Arch"];

const projectURL = [
  {
    live: "https://osama263.github.io/Your-Apartment/",
    github: "https://github.com/OSAMA263/Your-Apartment",
  },
  {
    live: "https://osama263.github.io/Design/",
    github: "https://github.com/OSAMA263/Design",
  },
  {
    live: "https://osama263.github.io/ecommerce-app/",
    github: "https://github.com/OSAMA263/ecommerce-app",
  },
  {
    live: "https://osama263.github.io/Arch-/",
    github: "https://github.com/OSAMA263/Arch-",
  },
];
