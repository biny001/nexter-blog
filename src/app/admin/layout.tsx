import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" w-full h-screen  bg-black/[0.96] antialiased bg-grid-white/[0.02]  ">
      {children}
    </div>
  );
};

export default layout;
