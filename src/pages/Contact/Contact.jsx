import tw from "tailwind-styled-components";
import ContentWrapper from "../../shared/ContentWrapper";
import PageWrapper from "../../shared/PageWrapper";
import SectionHeader from "../../shared/SectionHeader";
import FormWrapper from "./sections/FormWrapper";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <PageWrapper id="contact">
      <ContentWrapper>
        <SectionHeader>
          <p className="text-sm">Get In Touch</p> Contact With Me
        </SectionHeader>
        <FormWrapper></FormWrapper>
      </ContentWrapper>
      <Socials>
        <a
          href="https://www.linkedin.com/in/osama00"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/OSAMA263" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://www.facebook.com/osama.elseify.58"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook />
        </a>
      </Socials>
    </PageWrapper>
  );
}

const Socials = tw.div`
flex
justify-center
gap-4
mt-4
text-2xl
[&_svg]:text-[#3b3a3a]
[&_svg:hover]:text-[#08cc7e]
`;
