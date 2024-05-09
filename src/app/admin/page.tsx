import { SpotlightPreview } from "@/components/SpotlightComponent";
import React from "react";

const Page = () => {
  return (
    <div className="h-screen bg-black/[0.96] mx-auto max-w-screen-lg overflow-x-hidden  antialiased bg-grid-white/[0.02]">
      <SpotlightPreview />
    </div>
  );
};

export default Page;
