import { Spinner } from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Pictures(props) {
  const { ele, projectInd, i, projectPics } = props;

  return (
    <picture>
      <source
        media="(max-width: 645px)"
        srcSet={projectPics[projectInd].mobile[i]}
      />
      <LazyLoadImage
        className="sm:object-cover object-contain w-full max-h-[70vh]"
        alt={ele.pc[i]}
        src={projectPics[projectInd].pc[i]}
        placeholder={
          <div className="flex justify-center items-center p-24">
            <Spinner size="xl" className="!p-24 text-4xl"></Spinner>
          </div>
        }
      ></LazyLoadImage>
    </picture>
  );
}
