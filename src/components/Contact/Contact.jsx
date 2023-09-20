import ContentWrapper from "../../Global-Comps/futures/ContentWrapper";
import PageWrapper from "../../Global-Comps/futures/PageWrapper";
import SectionHeader from "../../Global-Comps/futures/SectionHeader";
import Form from "./sections/Form";

export default function Contact() {
  return (
    <PageWrapper id="contact">
      <ContentWrapper>
        <SectionHeader>
          <p className="text-sm">Get In Touch</p> Contact Me
        </SectionHeader>
        <Form></Form>
      </ContentWrapper>
    </PageWrapper>
  );
}
