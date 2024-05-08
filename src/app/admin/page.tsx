"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["awesome", "amazing", "elegant", "nice"];
const animationDuration = 1; // Duration of the animation in seconds
const delayBetweenWords = 2000; // Delay between words in milliseconds

const Page = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) =>
        prevIndex === words.length - 1 ? 0 : prevIndex + 1
      );
    }, delayBetweenWords);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="   py-24  ">
      <div className=" flex justify-center items-center space-x-1">
        <h1>This is the admin</h1>

        <AnimatePresence mode="wait">
          <motion.p
            key={words[currentWordIndex]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: animationDuration,
            }}
          >
            {words[currentWordIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Page;
