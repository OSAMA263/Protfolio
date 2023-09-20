import PageWrapper from "../../Global-Comps/futures/PageWrapper";
import BgAnimationLogos from "./sections/BgAnimationLogos";
import WhoAmI from "./sections/WhoAmI";

export default function Home() {
  return (
    <PageWrapper id="home">
      <BgAnimationLogos />
      <WhoAmI />
    </PageWrapper>
  );
}
