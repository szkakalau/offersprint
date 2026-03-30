import {
  FaqSection,
  FinalCtaSection,
  HeroSection,
  PainSection,
  HumanReviewSection,
  PricingSection,
  ProgramIntroSection,
  ScanAnchorSection,
  SprintContentSection,
} from "@/components/landing-sections";
import {
  AtsBeforeAfterSection,
  FounderTrustSection,
  RealResultsDataSection,
  ReportShowcaseSection,
  UsageFlowSection,
} from "@/components/conversion-sections";
import { PressTrustStrip, SocialProofBurstSection } from "@/components/social-proof";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PressTrustStrip />
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
      <FounderTrustSection />
      <HumanReviewSection />
      <PricingSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
