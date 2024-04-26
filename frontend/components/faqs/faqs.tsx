"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Faq } from "@/lib/types";
import { Button } from "../ui/button";

const faqs: Faq[] = [
  {
    question: "How does Nexus work?",
    answer:
      "Nexus is a platform that connects developers and enables them to collaborate on projects, share knowledge, and build a community. It provides a range of tools and features to help developers work together effectively and efficiently.",
  },
  {
    question: "What are the key features of Nexus?",
    answer:
      "Nexus offers a variety of features, provides a platform for networking and connecting with other developers.",
  },
  {
    question: "How can I get started with Nexus?",
    answer:
      "To get started with Nexus, simply sign up for an account and create a profile. You can then start exploring the platform, connecting with other developers, and collaborating on projects.",
  },
];

const Faqs = () => {
  return (
    <div
      className="max-w-screen-2xl px-4 py-16 md:py-28 mx-auto mt-14 md:mt-28 text-center justify-center border-t border-black dark:border-slate-400"
      id="faqs"
    >
      <h3 className="font-bold text-3xl mt-3 md:text-5xl">FAQs</h3>
      <p className="text-sm mt-5 md:text-lg max-w-[850px] md:text-center mx-auto">
        Discover answers to commonly asked questions about Nexus and its diverse
        range of features and capabilities, designed to meet your specific needs
        and requirements.
      </p>
      <div className="mt-12 max-w-[850px] mx-auto md:mt-20">
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="md:text-xl">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-left md:text-lg">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faqs;
