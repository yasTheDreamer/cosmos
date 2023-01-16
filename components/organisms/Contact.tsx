import React from "react";
import ContactForm from "../molecules/ContactForm";
import ContactHeader from "../molecules/ContactHeader";
const Contact = () => {
  return (
    <div className="flex flex-col w-full px-44 items-center">
      <ContactHeader />
      <ContactForm />
    </div>
  );
};

export default Contact;
