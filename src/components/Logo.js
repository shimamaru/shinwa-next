import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mx-2 mb-5">
      <MotionLink
        href="/"
        className="flex items-center justify-center w-16 h-16 text-lg text-white bg-black rounded-full shadow-2xl w-300 h-100"
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            // "rgba(131,190,180,1)",
            "#121212",
          ],
          duration: 1.5,
        }}
      >
        CB
      </MotionLink>
    </div>
  );
};

export default Logo;
