import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { BsChatLeftText } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import ContactCard, { ContactCardProps } from "./contact-card";

const contactItems: ContactCardProps[] = [
  {
    icon: <MdOutlineMail size={40} />,
    title: "Phone",
    description:
      "Have thoughts or questions? Send us an email! We're all ears and ready to assist.",
    linkString: "hello@nexus.com",
    linkHref: "",
  },
  {
    icon: <BsChatLeftText size={40} />,
    title: "Live chat",
    description:
      "Looking for quick answers? Chat with our friendly chat bot! Instant support at your fingertips.",
    linkString: "Start new chat",
    linkHref: "",
  },
  {
    icon: <FaPhone size={40} />,
    title: "Phone",
    description:
      "Need personal assistance? Give us a call – we're here for you.",
    linkString: "+1 (555) 123-4567",
    linkHref: "",
  },
];

const Contact = () => {
  return (
    <div className="max-w-screen-2xl px-4 py-16 md:py-28 mx-auto mt-14 md:mt-28 text-center justify-center border-t border-black dark:border-slate-400">
      <h3 className="font-bold text-3xl mt-3 md:text-5xl">Contact Nexus</h3>
      <p className="text-sm mt-5 md:text-lg max-w-[850px] md:text-center mx-auto">
        We'd love to hear from you. Get in touch!
      </p>
      <div className="mt-12 flex flex-col mx-auto md:mt-20 space-y-12 md:flex-row md:space-y-0 md:space-x-8">
        {contactItems.map((item, index) => (
          <ContactCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Contact;
