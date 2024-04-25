import Link from "next/link";
import React, { ReactNode } from "react";

export interface ContactCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  linkHref: string;
  linkString: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  title,
  description,
  linkString,
  linkHref,
}) => {
  return (
    <div className="flex flex-col max-w-[450px]">
      <span className="block mx-auto">{icon}</span>
      <h4 className="font-bold text-xl mt-7">{title}</h4>
      <p className="mt-3">{description}</p>
      <Link className="mt-5" href={linkHref}>{linkString}</Link>
    </div>
  );1
};

export default ContactCard;
