import {
  OutcomesSection,
  PricingSection,
  ProgramIntroSection,
  SprintContentSection,
} from "@/components/landing-sections";

export default function PricingPage() {
  return (
    <>
      <div id="program" className="scroll-mt-24">
        <ProgramIntroSection />
        <SprintContentSection />
      </div>
      <OutcomesSection />
      <PricingSection />
    </>
  );
}
