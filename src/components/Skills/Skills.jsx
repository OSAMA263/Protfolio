import tw from "tailwind-styled-components";
import PageWrapper from "../../Global-Comps/futures/PageWrapper";
import SectionHeader from "../../Global-Comps/futures/SectionHeader";
import SkillsSection from "./sections/SkillsSection";
import ContentWrapper from "../../Global-Comps/futures/ContentWrapper";

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
