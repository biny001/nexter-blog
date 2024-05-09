import { AuroraBackgroundDemo } from "@/components/LandingPage";
import { NavbarDemo } from "@/components/Navbar";
import { SpotlightPreview } from "@/components/SpotlightComponent";
import { BackgroundBeamsDemo } from "@/components/BeamComponent";
import React from "react";
import { BackgroundGradientAnimationDemo } from "@/components/BackgrounGradient";
import { HeroHighlightDemo } from "@/components/HeroHighlight";

const Home = () => {
  return (
    <div className=" w-full    space-y-11   ">
      {/* <NavbarDemo /> */}
      <AuroraBackgroundDemo />
      <SpotlightPreview />
      <BackgroundBeamsDemo />
      <BackgroundGradientAnimationDemo />
      <HeroHighlightDemo />
    </div>
  );
};

export default Home;
