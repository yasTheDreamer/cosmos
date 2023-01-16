import React from "react";
import Picture from "../atoms/Picture";
import Intro from "./Intro";

const Presentation = () => {
  return (
    <div className="flex w-full justify-between">
      <div className="w-1/2 flex flex-column justify-center items-center">
        <Intro />
      </div>
      <div className="flex w-1/2 justify-center items-center">
        <Picture />
      </div>
    </div>
  );
};

export default Presentation;
