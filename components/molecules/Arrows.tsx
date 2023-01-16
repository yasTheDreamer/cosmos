import React from "react";
import left_arrow from "../../images/LeftArrow.svg";
import right_arrow from "../../images/RightArrow.svg";
import LeftArrow from "../atoms/LeftArrow";
import RightArrow from "../atoms/RightArrow";

const Arrows = (props: any) => {
  return (
    <div className="relative flex justify-center ml-auto w-1/2">
      <LeftArrow icon={left_arrow} id="left_arrow" />
      <RightArrow icon={right_arrow} id="right_arrow" />
    </div>
  );
};

export default Arrows;
