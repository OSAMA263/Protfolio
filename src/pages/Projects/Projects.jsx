import PageWrapper from "../../shared/PageWrapper";
import SectionHeader from "../../shared/SectionHeader";
import ContentWrapper from "../../shared/ContentWrapper";
import ProjectsContainer from "./sections/ProjectsContainer";

export default function Projects() {
  return (
    <PageWrapper id="projects">
      <ContentWrapper>
        <SectionHeader>
          <p className="text-sm">what i have done so far</p>My Projects
        </SectionHeader>
          <ProjectsContainer />
      </ContentWrapper>
    </PageWrapper>
  );
}
