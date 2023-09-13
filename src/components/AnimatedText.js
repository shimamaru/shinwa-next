import React from "react";

import { motion } from "framer-motion";

const singleWord = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div className="flex items-center justify-center w-full py-2 mx-auto overflow-hidden ">
      <motion.h1
        className={`inline-block w-full text-dark  font-bold capitalize ${className}`}
        variants={singleWord}
        initial="initial"
        animate="animate"
      >
        Turning Vision Into Reality With Code And Design.
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
