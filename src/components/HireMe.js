import React from "react";
import webDeveloperImage from "../../public/images/new/webDev.png";
import UIUXImage from "../../public/images/new/WebUl:UX.png";

import Image from "next/image";

const HireMe = () => {
  return (
    <div className="fixed flex items-center justify-center overflow-hidden left-4 bottom-4">
      <div className="w-48 h-auto">
        <Image
          className="w-20 h-auto animate-spin"
          src={webDeveloperImage}
          alt=""
          priority={true}
        />
      </div>
    </div>
  );
};

export default HireMe;
