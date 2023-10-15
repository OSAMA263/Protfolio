import SmNavbar from "./smNavbar";
import LgNavbar from "./LgNavbar";
export default function Navbar() {
  return (
    <>
      <SmNavbar navLinks={navLinks} />
      <LgNavbar navLinks={navLinks} linksAnimation={linksAnimation} />
    </>
  );
}

const navLinks = [
  { link: "home", label: "Who?" },
  { link: "about", label: "About Me" },
  { link: "skills", label: "Skills" },
  { link: "projects", label: "Projects" },
  { link: "contact", label: "Contact" },
];

const linksAnimation = {
  initial: { x: "-150%" },
  animate: (i) => ({
    x: "0%",
    transition: {
      delay: 0.3 * i + 2.7,
      duration: 0.8,
    },
  }),
};
