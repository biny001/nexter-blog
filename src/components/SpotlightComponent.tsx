"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Spotlight } from "./ui/Spotlight";
import { Highlight } from "./ui/hero-highlight";

import { HoverBorderGradientDemo } from "./HoverButton";

export function SpotlightPreview() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = ["awesome", "amazing", "elegant", "nice"];
  const animationDuration = 2; // Duration of the animation in seconds
  const delayBetweenWords = 2000;
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) =>
        prevIndex === words.length - 1 ? 0 : prevIndex + 1
      );
    }, delayBetweenWords);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="h-[40rem]  w-full rounded-md flex flex-col justify-center items-center md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 bgtra left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl space-y-2 md:text-7xl lg:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Speak <br /> Your
          {/* <Highlight className="  text-black dark:text-slate-200     ">
            Thoughts.
          </Highlight> */}
          <Highlight className="   bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 ">
            Thoughts.
          </Highlight>
        </h1>
        <div>
          <HoverBorderGradientDemo />
        </div>
      </div>
    </div>
  );
}
