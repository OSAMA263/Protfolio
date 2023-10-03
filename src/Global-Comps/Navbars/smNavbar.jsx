import { Link } from "react-scroll";
import { motion } from "framer-motion";
import tw from "tailwind-styled-components";
import { Slide } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function SmNavbar({ navLinks }) {
  const [isOpen, setIsOpen] = useState(false);

  const handel_toggle = () => {
    setIsOpen((perv) => !perv);
  };

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isOpen]);

  const slideStyle = `!z-[696] ${
    !isOpen ? "delay-[.9s]" : ""
  } !duration-200 !ease-linear bg-[#171717]`;

  return (
    <>
      <div
        className="fixed top-0 right-0 z-[969] m-2"
      >
        <Button $active={isOpen} aria-label="menu" onClick={handel_toggle}>
          <Line className="first"></Line>
          <Line className="mid"></Line>
          <Line className="last"></Line>
        </Button>
      </div>
      <Slide in={isOpen} direction="left" className={slideStyle}>
        <Nav>
          <ul className="menu-ul">
            {navLinks.map(({ link, label }, i) => (
              <Li custom={{ i, isOpen }} {...linksAnimation} key={i}>
                <Link onClick={handel_toggle} href={link} spy to={link}>
                  {label}
                </Link>
              </Li>
            ))}
          </ul>
        </Nav>
      </Slide>
    </>
  );
}

const Line = tw.span`
transition-all
bg-gray-400 
w-full 
h-[3px]
absolute
block
top-1/2
mx-auto
rounded-md
-translate-y-1/2
duration-700
`;

const Nav = tw.nav`
flex
items-center 
justify-center
h-full
`;

const Li = tw(motion.li)`
[&>a.active]:line-through
[&>a.active]:text-[#a8a8a8]
decoration-[#0aff9d]
`;

const Button = tw.button`
${({ $active }) => $active ? "active gap-y-0":"gap-y-2"}
lg:hidden
backdrop-blur-xl
h-8
transition-all
m-2
w-9
bg-[#17171738]
overflow-hidden
duration-700
relative
`;

const linksAnimation = {
  initial: { x: "-150%" },
  animate: ({ isOpen, i }) => ({
    x: isOpen ? ["-200%", "0%"] : ["0%", "200%"],
    transition: {
      delay: 0.1 * i + 0.3,
      duration: 0.8,
    },
  }),
};
