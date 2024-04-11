import { useMediaQuery } from "@chakra-ui/media-query";
import { motion, useSpring } from "framer-motion";
import { useRef } from "react";
import tw from "tailwind-styled-components";

export default function AppWrapper({ children }) {
  const [SM_Device] = useMediaQuery("(max-width: 1012px)");
  const circleRef = useRef(null);
  // const smspring = { stiffness: 280, damping: 10, mass: 0.1 };
  const lgspring = { stiffness: 85, damping: 15, mass: 0.1 };
  const lgPposition = { x: useSpring(0, lgspring), y: useSpring(0, lgspring) };
  // const smPosition = { x: useSpring(0, smspring), y: useSpring(0, smspring) };

  const handle_mouse_move = (e) => {
    if (SM_Device) return;
    const { clientX, clientY } = e;
    const { width, height } = circleRef.current.getBoundingClientRect();
    const moveX = clientX - width / 3;
    const moveY = clientY - height / 3;
    lgPposition.x.set(moveX);
    lgPposition.y.set(moveY);

    // smPosition.x.set(e.clientX);
    // smPosition.y.set(e.clientY);
  };
  return (
    <div onMouseMove={handle_mouse_move}>
      {children}
      {!SM_Device && (
        <>
          <BigCircle ref={circleRef} style={lgPposition}></BigCircle>
          {/* <SmallCircle style={{ left: smPosition.x, top: smPosition.y }}></SmallCircle> */}
        </>
      )}
    </div>
  );
}
// const SmallCircle = tw(motion.div)`
// fixed
// rounded-full
// w-4
// h-4
// -translate-x-1/2
// -translate-y-1/2
// bg-[#0aff9dc8]
// pointer-events-none
// z-[6666666666666666666666669]
// `;

const BigCircle = tw(motion.div)`
border-[1px]
fixed
border-[#5c605d67]
rounded-full
w-12
h-12
top-0
left-0
bg-black
bg-opacity-20
pointer-events-none
z-[6666666666666666666666669]
`;
