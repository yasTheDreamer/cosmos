import React from "react";
import Image from "next/image";

const Arrow = (props: any) => {
  return (
    <button id={props.id} onClick={props.onClick} className={props.class}>
      <Image onClick={props.onClick} src={props.icon} alt="arrow"></Image>
    </button>
  );
};

export default Arrow;
