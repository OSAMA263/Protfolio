import tw from "tailwind-styled-components";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Slide } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Navbar() {
  return (
    <>
      <SmNavbar />
      <LgNavbar />
    </>
  );
}
// LARGE DEVICE NAVBAR------
function LgNavbar() {
  const linksAnimation = {
    initial: { x: "-150%" },
    animate: (i) => ({
      x: "0%",
      transition: {
        delay: 0.3 * i + 2.2,
        duration: 0.6,
      },
    }),
  };

  return (
    <Nav>
      <ul>
        {navLinks.map(({ link, label }, i) => (
          <Li {...linksAnimation} custom={i} key={i}>
            <Link
              aria-label="Square-link"
              className="p-[2px]"
              href={link}
              spy
              to={link}
            >
              <Square />
            </Link>
            <H1>
              <Link href={link} spy to={link}>
                {label}
              </Link>
            </H1>
          </Li>
        ))}
      </ul>
    </Nav>
  );
}
const Li = tw(motion.li)`
overflow-hidden
p-2
flex
font-bold
relative
items-center
`;

const Square = tw.small`
z-20
absolute
left-1
transition-all
duration-500
p-[5px]
border-gray-500
border-2
`;

const H1 = tw.h1`
transition-all 
-translate-x-[120%]
duration-500
opacity-0
ms-5
`;

const Nav = tw.nav`
ml-5
fixed
top-1/2
-translate-y-1/2
text-gray-600
[&_ul_a]:flex
[&_a]:items-center
hidden
lg:block
`;
// SMALL DEVICE NAVBAR------
function SmNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const linksAnimation = {
    initial: { x: "-150%" },
    animate: ({ isOpen, i }) => ({
      x: isOpen ? ["-200%", "0%"] : ["0%", "200%"],
      transition: {
        delay: 0.1 * i + 0.2,
        duration: 0.7,
      },
    }),
  };

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
      <div className="fixed top-0 right-0 z-[969] m-2">
        <Button $active={isOpen} aria-label="menu" onClick={handel_toggle}>
          <Line className="first"></Line>
          <Line className="mid"></Line>
          <Line className="last"></Line>
        </Button>
      </div>
      <Slide in={isOpen} direction="left" className={slideStyle}>
        <nav className="flex items-center justify-center h-full">
          <ul className="menu-ul">
            {navLinks.map(({ link, label }, i) => (
              <motion.li
                className="[&>a.active]:line-through [&>a.active]:text-[#a8a8a8] decoration-[#0aff9d]"
                custom={{ i, isOpen }}
                {...linksAnimation}
                key={i}
              >
                <Link onClick={handel_toggle} href={link} spy to={link}>
                  {label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
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
duration-500
`;

const Button = tw.button`
${({ $active }) => ($active ? "active gap-y-0" : "gap-y-2")}
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

const navLinks = [
  { link: "home", label: "Who?" },
  { link: "about", label: "About Me" },
  { link: "skills", label: "Skills" },
  { link: "projects", label: "Projects" },
  { link: "contact", label: "Contact" },
];
