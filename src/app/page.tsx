import {
  FaqSection,
  FinalCtaSection,
  HeroSection,
  PainSection,
  PricingSection,
  ProgramIntroSection,
  ScanAnchorSection,
  SprintContentSection,
} from "@/components/landing-sections";
import {
  AtsBeforeAfterSection,
  RealResultsDataSection,
  ReportShowcaseSection,
  UsageFlowSection,
} from "@/components/conversion-sections";
import { SocialProofBurstSection } from "@/components/social-proof";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SocialProofBurstSection />
      <PainSection />
      <UsageFlowSection />
      <ScanAnchorSection />
      <ReportShowcaseSection />
      <AtsBeforeAfterSection />
      <RealResultsDataSection />
      <div id="program" className="scroll-mt-24">
        <ProgramIntroSection />
        <SprintContentSection />
      </div>
      <PricingSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
