import React from "react";
import Image from "next/image";
import arrowRight from "../../images/arrow_right.svg";

const ArrowRight = () => {
  return (
    <div className="w-full">
      <Image
        className="float-right max-mobile:float-left max-mobile:rotate-[70deg]"
        src={arrowRight}
        alt="arrow_right"
      ></Image>
    </div>
  );
};

export default ArrowRight;
