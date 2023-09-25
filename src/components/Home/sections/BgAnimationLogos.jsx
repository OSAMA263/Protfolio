/* eslint-disable react/jsx-key */
import tw from "tailwind-styled-components";
import { motion, useSpring } from "framer-motion";
import { useRef } from "react";
import MovableLogo from "../../../Global-Comps/futures/MovableLogo";
import { logos } from "../data";

const spring = { stiffness: 100, damping: 15, mass: 0.1 };
const small_device = window.matchMedia("(max-width:450px)");

export default function BgAnimationLogos() {
  const ref = useRef(null);
  const wrapperStyle = { x: useSpring(0, spring), y: useSpring(0, spring) };
  // ------------------
  const mouse_move = (e) => {
    const { width, top, height, left } = ref.current.getBoundingClientRect();

    const moveX = (e.clientX - window.innerWidth + (left + width) / 2) / 69;
    const moveY = (e.clientY - window.innerHeight + (top + height) / 2) / 69;

    wrapperStyle.x.set(moveX);
    wrapperStyle.y.set(moveY);
  };
  // ------------------

  const mouse_leave = () => {
    wrapperStyle.x.set(0);
    wrapperStyle.y.set(0);
  };
  // ------------------
  const handle_logos_on_small_divces = () => {
    return small_device.matches ? logos.slice(0, 15) : logos;
  };

  return (
    <Section ref={ref} onMouseMove={mouse_move} onMouseLeave={mouse_leave}>
      {handle_logos_on_small_divces().map((svg, i) => (
        <MovableLogo
          key={i}
          i={i}
          wrapperStyle={wrapperStyle}
          spring={spring}
          svgLogo={svg.logo}
          svgPosition={svg.position}
        />
      ))}
    </Section>
  );
}

const Section = tw(motion.div)`
relative
h-[98dvh]
w-[100dvw]
`;
