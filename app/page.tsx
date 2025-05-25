"use client";

import Hero from "@/components/layout/hero";
import DescriptionSection from "@/components/layout/section_description";
import HeroProjectSection from "@/components/layout/section_projet";
import SkillsSection from "@/components/layout/section_skills";
import { useEffect } from "react";
import Services from "@/components/layout/section_service";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      <Hero />
      <HeroProjectSection />
      <DescriptionSection />
      <SkillsSection />
      <Services />
    </>
  );
}
