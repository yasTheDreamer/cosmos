import React from "react";
import Image from "next/image";
import arrowRight from "../../images/arrow_right.svg";

const ArrowRight = () => {
  return (
    <div className="w-full">
      <Image className="float-right" src={arrowRight} alt="arrow_right"></Image>
    </div>
  );
};

export default ArrowRight;
