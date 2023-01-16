import React from "react";
import Image from "next/image";
import banner from "../../images/rectangle.svg";

const Banner = () => {
  return (
    <div className="-ml-56 h-56 overflow-hidden">
      <Image src={banner} alt="banner"></Image>
    </div>
  );
};

export default Banner;
