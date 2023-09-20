import PageWrapper from "../../Global-Comps/futures/PageWrapper";
import SectionHeader from "../../Global-Comps/futures/SectionHeader";
import ContentWrapper from "../../Global-Comps/futures/ContentWrapper";
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
