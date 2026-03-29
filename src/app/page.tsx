import {
  FaqSection,
  FinalCtaSection,
  HeroSection,
  OutcomesSection,
  PainSection,
  PreviewSection,
  PricingSection,
  ProgramIntroSection,
  ScanAnchorSection,
  SprintContentSection,
} from "@/components/landing-sections";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PainSection />
      <ScanAnchorSection />
      <PreviewSection />
      <ProgramIntroSection />
      <SprintContentSection />
      <OutcomesSection />
      <PricingSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
