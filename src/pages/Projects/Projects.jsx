import PageWrapper from "../../shared/PageWrapper";
import SectionHeader from "../../shared/SectionHeader";
import ContentWrapper from "../../shared/ContentWrapper";
import ContainerWrapper from "./sections/ContainerWrapper";

export default function Projects() {
  return (
    <PageWrapper id="projects">
      <ContentWrapper>
        <SectionHeader>
          <p className="text-sm">what i have done so far</p>My Projects
        </SectionHeader>
        <ContainerWrapper></ContainerWrapper>
      </ContentWrapper>
    </PageWrapper>
  );
}
