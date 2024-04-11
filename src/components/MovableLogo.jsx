import { useSpring, motion } from "framer-motion";
import tw from "tailwind-styled-components";
import { useRef } from "react";

export default function MovableLogo(props) {
  const { svgLogo, svgPosition, spring, wrapperStyle ,i} = props;
  // ----------
  const position = { x: useSpring(0, spring), y: useSpring(0, spring) };
  const ref = useRef(null);
  // ----------
  const mouse_move = (e) => {
    const { top, left, width, height } = ref.current.getBoundingClientRect();

    const moveX = (e.clientX - (left + width / 2)) / 2;
    const moveY = (e.clientY - (top + height / 2)) / 2;

    position.x.set(moveX);
    position.y.set(moveY);
  };
  // ----------
  const mouse_leave = () => {
    position.x.set(0);
    position.y.set(0);
  };
  // ----------
  return (
    <LogoWrapper
      ref={ref}
      {...logoAnimation}
      custom={i}
      style={{ ...wrapperStyle, left: svgPosition.left, top: svgPosition.top }}
      onMouseMove={mouse_move}
      onMouseLeave={mouse_leave}
    >
      <Logo whileHover={{ scale: 1.9 }} style={position}>
        {svgLogo}
      </Logo>
    </LogoWrapper>
  );
}
const logoAnimation = {
  initial: {
    opacity: 0,
  },
  animate: (i) => ({ opacity: 1, transition: { delay: 0.029 * i + 1.6 } }),
};

const LogoWrapper = tw(motion.div)`                              
  absolute
`;

const Logo = tw(motion.div)`
  [&>svg]:hover:text-white
  [&>svg]:text-gray-600
  p-3
`;
