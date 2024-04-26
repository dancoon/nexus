"use client";

import React from "react";
import Link from "next/link";
import { z } from "zod";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { subscribeSchema } from "@/lib/schema";
import Logo from "../navbar/logo";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const Footer = () => {
  const form = useForm<z.infer<typeof subscribeSchema>>({
    resolver: zodResolver(subscribeSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof subscribeSchema>) {
    // Do something with the form values.
    console.log(values);
  }

  return (
    <footer className="max-w-screen-2xl flex flex-wrap mx-auto px-5 md:px-16 pt-5 pb-16 md:pt-20 border-t md:border-0 border-black dark:border-slate-400">
      <div className="w-full grid-cols-2 hidden md:grid md:mb-20">
        <div className="flex space-x-10">
          <Logo />
          <div className="flex flex-col space-y-4">
            <h4 className="font-bold">About us</h4>
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Features</Link>
            <Link href={"/"}>FAQs</Link>
            <Link href={"/"}>Contact Us</Link>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="font-bold">Help Center</h4>
            <Link href={"/"}>Community</Link>
            <Link href={"/"}>Events</Link>
            <Link href={"/"}>Terms of Use</Link>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="font-bold">Development</h4>
            <Link href={"/"}>Open source</Link>
            <Link href={"/"}>Author (Dancoon)</Link>
            <Link href={"/"}>Support</Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold">Subscribe</h4>
          <p className="mt-4">
            Stay updated with our latest features and releases.
          </p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex mt-6 space-x-4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="johndoe@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button>Subscribe</Button>
            </form>
          </Form>

          <p className="font-xs mt-4">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse space-y-8 md:border-t border-black dark:border-slate-400 md:flex-row md:justify-between md:w-full">
        <div className="flex flex-col-reverse mt-8 md:flex-row md:space-x-6">
          <p className="mt-8 md:mt-0">
            {" "}
            &copy; 2024 Nexus. All rights reserved.
          </p>
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6">
            <Link href={""}>Privacy Policy</Link>
            <Link href={""}>Terms of Service</Link>
            <Link href={""}>Cookie Settings</Link>
          </div>
        </div>
        <div className="flex space-x-3">
          <FaFacebook size={20} />
          <FaInstagram size={20} />
          <BsTwitterX size={20} />
          <FaLinkedinIn size={20} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
