import React from "react";
import Image from "next/image";
import connect from "../../images/connect.svg";

const ContactHeader = () => {
  return (
    <div className="flex flex-col xl:w-3/4">
      <Image src={connect} alt="connect" />
      <p className="text-gray-400 text-xl mt-2">
        Hit me up if you want to talk about your next project or if you just
        want to chat
      </p>
    </div>
  );
};

export default ContactHeader;
