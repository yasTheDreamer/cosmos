import React from "react";
import Image from "next/image";
import connect from "../../images/connect.svg";

const ContactHeader = () => {
  return (
    <div className="flex flex-col 2xl:w-3/4 xl:w-4/5">
      <Image src={connect} alt="connect" />
      <p className="text-gray-400 text-xl mt-2">
        Hit me up if you want to talk about your next project or if you just
        want to chat
      </p>
    </div>
  );
};

export default ContactHeader;
