import React from "react";

const Dot = (props: any) => {
  return (
    <div id={props.id} className={`${props.color} rounded-full w-3 h-3`}></div>
  );
};

export default Dot;
