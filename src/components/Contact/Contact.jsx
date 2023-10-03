import tw from "tailwind-styled-components";
import ContentWrapper from "../../Global-Comps/futures/ContentWrapper";
import PageWrapper from "../../Global-Comps/futures/PageWrapper";
import SectionHeader from "../../Global-Comps/futures/SectionHeader";
import FormWrapper from "./sections/FormWrapper";

export default function Contact() {
  return (
    <PageWrapper id="contact">
      <ContentWrapper>
        <SectionHeader>
          <p className="text-sm">Get In Touch</p> Contact Me
        </SectionHeader>
        <FormWrapper></FormWrapper>
      </ContentWrapper>
      <H2>
        designed and developed by{"\u00A0"}
        <a
          className="text-[#0aff9d] underline-offset-4 underline"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/OSAMA263"
        >
          me 
        </a>;
      </H2>
    </PageWrapper>
  );
}

const H2=tw.h2`
mt-6
text-center
`