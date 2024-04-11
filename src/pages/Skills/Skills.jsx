import tw from "tailwind-styled-components";
import PageWrapper from "../../shared/PageWrapper";
import SectionHeader from "../../shared/SectionHeader";
import ContentWrapper from "../../shared/ContentWrapper";
import SkillsSection from "./sections/SkillsSection";

export default function Skills() {
  return (
    <PageWrapper id="skills">
      <ContentWrapper>
        <Wrapper>
          <div className="space-y-4">
            <div>
              <SectionHeader>
                <p className="!text-sm">what i do</p>
                My Skills
              </SectionHeader>
            </div>
            <SkillsSection />
          </div>
        </Wrapper>
      </ContentWrapper>
    </PageWrapper>
  );
}

const Wrapper = tw.div`
grid
items-center
h-full
w-full
`;
