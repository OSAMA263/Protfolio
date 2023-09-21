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
    </PageWrapper>
  );
}
