import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

interface FeatureCardProps {
  title: string;
  description: string;
  linkString: string;
  linkHref: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  linkString,
  linkHref,
  icon,
}) => {
  return (
    <div className="border border-black rounded-sm p-5 text-left min-h-48 md:min-h-72 md:py-16 dark:border-white dark:border">
      {icon}
      <h3 className="font-bold text-lg mt-3 md:text-4xl md:mt-6">{title}</h3>
      <p className="text-sm my-3 md:text-lg">{description}</p>
      <Link href={linkHref} className="text-sm">
        <span className="flex items-center md:text-lg">
          {linkString} <FaChevronRight className="ml-1" />
        </span>
      </Link>
    </div>
  );
};

export default FeatureCard;
