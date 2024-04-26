"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import whiteModeLogo from "@/public/white-mode-logo.svg";
import darkModeLogo from "@/public/dark-mode-logo.svg";
import { useTheme } from "next-themes";

const Logo = () => {
  const { theme } = useTheme();
  const isLightTheme = theme === "light";
  const isDarkTheme = theme === "dark";

  return (
    <Link href={"/"}>
      <Image
        src={isLightTheme ? whiteModeLogo : isDarkTheme? darkModeLogo: whiteModeLogo}
        alt="nexus's logo"
        height={25}
        width={83}
        priority
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
    </Link>
  );
};

export default Logo;
