import {
  FaqSection,
  FinalCtaSection,
  HeroSection,
  PainSection,
  PreviewSection,
  ScanAnchorSection,
} from "@/components/landing-sections";
import {
  TestimonialsSection,
  TrustSignalsSection,
} from "@/components/social-proof";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustSignalsSection />
      <PainSection />
      <ScanAnchorSection />
      <PreviewSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
