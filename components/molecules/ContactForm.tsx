import React, { useEffect } from "react";
import Image from "next/image";
import send_icon from "../../images/send.svg";

const ContactForm = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex 2xl:w-3/4 xl:w-4/5 mt-10">
        <form method="POST" action="/test" id="contact"></form>
        <div className="flex flex-col w-1/2">
          <input
            type="text"
            name="name"
            id="name"
            className="rounded-md h-20 w-full mb-3 text-2xl indent-5 bg-darkerGray text-gray-400"
            placeholder="Name"
            form="contact"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            className="rounded-md h-20 w-full text-2xl indent-5 bg-darkerGray text-gray-400"
            placeholder="Email"
            form="contact"
            required
          />
        </div>
        <textarea
          name="message"
          id="message"
          className="rounded-md w-1/2 h-42 text-xl indent-5 bg-darkerGray resize-none text-gray-400 py-4 mx-3"
          placeholder="Message"
          form="contact"
          required
        />
      </div>
      <div className="flex 2xl:w-3/4 xl:w-4/5 mt-8">
        <button
          type="submit"
          id="submit"
          form="contact"
          className="flex bg-[#7BFBB2] ml-auto mr-3 rounded-md w-56 h-10 justify-evenly items-center text-lg shadow-[-3px_3px_6px_rgba(50,182,120,1)] active:shadow-none"
        >
          Send Message
          <Image src={send_icon} alt="send" className="w-6 -ml-6"></Image>
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
