import React from "react";
import Image from "next/image";
import { Montserrat } from "@next/font/google";
import external_link from "../../images/external_link.svg";
import Link from "next/link";

const mont = Montserrat({ weight: "800" });
const mont_lighter = Montserrat({ weight: "500" });

const Card = (props: any) => {
  return (
    <div
      key={props.name}
      id={props.id}
      className={`grid text-white ${props.color} w-[400px] h-[600px] p-2 ${props.margin} mx-2 rounded-2xl text-black card-container`}
    >
      <Image
        className={`justify-self-center ${props.class}`}
        src={props.thumbnail}
        alt={props.name}
      ></Image>
      <Link href={props.href} target="_blank">
        <div className={`flex items-center`}>
          <h1 className={`text-2xl ${mont.className}`}>{props.name}</h1>
          <Image src={external_link} alt="external_link"></Image>
        </div>
      </Link>
      <p className={mont_lighter.className}>{props.text}</p>
    </div>
  );
};

export default Card;
