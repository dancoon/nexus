import Link from "next/link";
import React from "react";
import Image from "next/image";
import whiteModeLogo from "@/public/white-mode-logo.svg";
import darkModeLogo from "@/public/dark-mode-logo.svg";
import { useTheme } from "next-themes";

const Logo = () => {
  const { theme } = useTheme();
  return (
    <>
      <Link href="/">
        {theme === "light" ? (
          <Image
            src={whiteModeLogo}
            alt="nexus's logo"
            height={25}
            width={83}
            priority
          />
        ) : (
          <Image
            src={darkModeLogo}
            alt="nexus's logo"
            height={25}
            width={83}
            priority
          />
        )}
      </Link>
    </>
  );
};

export default Logo;
