import tw from "tailwind-styled-components";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function LgNavbar({ navLinks, linksAnimation }) {
  return (
    <Nav>
      <ul>
        {navLinks.map(({ link, label }, i) => (
          <Li {...linksAnimation} custom={i} key={i}>
            <Link aria-label="Square-link" className="p-[2px]" href={link} spy to={link}>
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
p-[4.5px]
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
