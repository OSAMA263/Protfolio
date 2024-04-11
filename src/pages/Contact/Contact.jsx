import tw from "tailwind-styled-components";
import ContentWrapper from "../../shared/ContentWrapper";
import PageWrapper from "../../shared/PageWrapper";
import SectionHeader from "../../shared/SectionHeader";
import FormWrapper from "./sections/FormWrapper";

export default function Contact() {
  return (
    <PageWrapper id="contact">
      <ContentWrapper>
        <SectionHeader>
          <p className="text-sm">Get In Touch</p> Contact With Me
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
        </a>
        ;
      </H2>
    </PageWrapper>
  );
}

const H2 = tw.h2`
mt-6
text-center
`;
