import React, { useEffect, useState } from "react";
import Image from "next/image";
import send_icon from "../../images/send.svg";
import contactService from "../../services/contact.service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [body, setBody] = useState({});

  const onClick = () => {
    const name = document.getElementById("name") as HTMLInputElement;
    const email = document.getElementById("email") as HTMLInputElement;
    const message = document.getElementById("message") as HTMLInputElement;

    if (
      name.reportValidity() &&
      email.reportValidity() &&
      message.reportValidity()
    ) {
      setBody({
        name: name.value,
        email: email.value,
        message: message.value,
      });
    }
  };

  useEffect(() => {
    if (Object.keys(body).length != 0)
      contactService.sendMail(body).then((res: any) => {
        if (res.status == 200) toast("Email Sent");
      });
  }, [body]);

  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex xxs:max-lg:flex-col xs:max-lg:w-full lg:w-full xl:w-3/4 mt-10">
        <div className="flex flex-col xxs:max-lg:w-full w-1/2">
          <input
            type="text"
            name="name"
            id="name"
            className="rounded-md h-20 w-full mb-3 text-2xl indent-5 bg-darkerGray text-gray-400"
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            className="rounded-md h-20 w-full text-2xl indent-5 bg-darkerGray text-gray-400"
            placeholder="Email"
            required
          />
        </div>
        <textarea
          name="message"
          id="message"
          className="rounded-md xxs:max-lg:w-full xxs:max-lg:mx-0 xxs:max-lg:mt-3 xxs:max-lg:h-56 w-1/2 h-42 text-xl indent-5 bg-darkerGray resize-none text-gray-400 py-4 mx-3"
          placeholder="Message"
          required
        />
      </div>
      <div className="flex xl:w-3/4 mt-8">
        <button
          type="button"
          id="submit"
          onClick={onClick}
          className="flex bg-[#7BFBB2] ml-auto mr-3 rounded-md w-56 h-10 justify-evenly items-center text-lg shadow-[-3px_3px_6px_rgba(50,182,120,1)] active:shadow-none"
        >
          Send Message
          <Image src={send_icon} alt="send" className="w-6 -ml-6"></Image>
        </button>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default ContactForm;
