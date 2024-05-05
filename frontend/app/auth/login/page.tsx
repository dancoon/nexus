"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/lib/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAppDispatch } from "@/redux/hooks";
import { useLoginMutation } from "@/redux/features/authApiSlice";
import { setAuth, setUser } from "@/redux/features/authSlice";
import { toast } from "@/components/ui/use-toast";
import { errorParse } from "@/lib/utils";

export default function page() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [logIn, { isLoading, error }] = useLoginMutation();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginSchema>) {
    const nextUrl =
      new URLSearchParams(window.location.search).get("next") || "/home";

    logIn({ ...values })
      .unwrap()
      .then(() => {
        toast({
          title: "Sign In Successful",
          description: "You have successfully signed in",
        });
        router.push(nextUrl);
        dispatch(setAuth());
        dispatch(setUser(values.email));
      })
      .catch((error) => {
        const errMessage = errorParse(error?.data);
        toast({
          title: "Sign In Failed",
          description: errMessage,
          variant: "destructive",
        });
      });
  }

  const handleSignInWithGithub = () => {
    console.log("Sign in with Github");
  };

  const handleSignInWithGoogle = () => {
    console.log("Sign in with Google");
  };

  return (
    <>
      <div className="flex max-w-screen-2xl h-screen mx-auto px-4 justify-center">
        <Card className="w-[400px] max-h-[570px] text-left mx-auto my-auto">
          <CardHeader>
            <CardTitle>Log into your account</CardTitle>
            <CardDescription>
              Enter your email below to sign in.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="grid w-full items-center gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex flex-col space-y-1.5">
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="johndoe@gmail.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className="flex flex-col space-y-1.5">
                        <FormLabel className="flex justify-between items-center">
                          Password{" "}
                          <Button
                            variant={"link"}
                            type="button"
                            className="text-sm text-muted-foreground"
                          >
                            Forgot your password?
                          </Button>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="*******"
                            {...field}
                            type="password"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <Button
                    variant={"outline"}
                    onClick={handleSignInWithGithub}
                    type="button"
                  >
                    <FaGithub className="mr-2 h-4 w-4" />
                    Github
                  </Button>
                  <Button
                    variant={"outline"}
                    onClick={handleSignInWithGoogle}
                    type="button"
                  >
                    <FaGoogle className="mr-2 h-4 w-4" />
                    Google
                  </Button>
                </div>
                <Button type="submit" size={"lg"} className="w-full">
                  {isLoading ? "Signing In..." : "Sign In"}
                </Button>
              </form>
            </Form>
            <p className="text-sm text-center mt-3">
              Don't have an account?{" "}
              <Button variant={"link"} asChild>
                <Link href="/auth/signup"> Sign up</Link>
              </Button>
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
