import React from "react";
import Image from "next/image";
import bg from "../../images/curved_bg.svg";

const Background = () => {
  return (
    <div className="relative pt-8 z-0">
      <Image className="w-screen" src={bg} alt="curved_background"></Image>
      <h1 className="absolute xxs:top-12 xs:top-20 md:top-28 w-full xs:text-2xl mobile:text-4xl md:text-4xl text-white text-center">
        Unleash The Power Of
        <br />
        <span className="bg-purple-underline bg-contain bg-no-repeat pb-3 pr-2 pl-2">
          Software
        </span>
      </h1>
      <div className="h-20 bg-black -mt-2"></div>
    </div>
  );
};

export default Background;
