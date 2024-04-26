"use client";

import React from "react";
import ModeToggle from "../dark-mode-toggle";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Logo from "./logo";

const NavLinks = [
  { title: "Features", href: "#features" },
  { title: "About", href: "#about" },
  { title: "Articles", href: "#articles" },
  { title: "Events", href: "#events" },
  { title: "FAQs", href: "#faqs" },
];

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(true);

  const handleToggleMenu = () => {
    setIsHidden(!isHidden);
  };

  const menuContentClass = cn(
    isHidden ? "hidden" : "block",
    "w-full md:w-auto md:hidden1"
  );

  return (
    <nav>
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-6">
          <Logo />
          <div className="hidden md:block">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-black">
              {NavLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="block py-2 dark:text-gray-100 hover:text-primary dark:hover:text-primary"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex space-x-4">
          <ModeToggle />
          <div className="hidden md:flex space-x-4">
            <Button variant={"outline"}>Log In</Button>
            <Button>Sign Up</Button>
          </div>

          <button
            onClick={handleToggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm md:hidden rounded-lg hover:bg-gray-100 focus:outline-none"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div className={menuContentClass}>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-black">
            {NavLinks.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className="block py-2 dark:text-gray-100 hover:text-primary dark:hover:text-primary"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
