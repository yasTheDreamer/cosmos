import React from "react";
import Image from "next/image";
import bg from "../../images/curved_bg.svg";

const Background = () => {
  return (
    <div className="relative pt-8 z-0">
      <Image src={bg} alt="curved_background"></Image>
      <h1 className="absolute top-28 left-[38%] text-4xl text-white text-center">
        Unleash The Power Of
        <br />
        <span className="bg-purple-underline bg-contain bg-no-repeat pb-3 pr-2 pl-2">
          Software
        </span>
      </h1>
    </div>
  );
};

export default Background;
