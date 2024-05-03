import { TheRealMe } from "../../components/TheRealMe";
import PageWrapper from "../../shared/PageWrapper";
import BgAnimationLogos from "./sections/BgAnimationLogos";
import WhoAmI from "./sections/WhoAmI";

export default function Home() {
  return (
    <>
      <PageWrapper id="home">
        <BgAnimationLogos />
        <WhoAmI />
      </PageWrapper>
      {!localStorage.dont && <TheRealMe />}
    </>
  );
}
