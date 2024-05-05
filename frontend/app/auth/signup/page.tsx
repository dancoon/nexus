"use client";

import React from "react";
import { z } from "zod";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signupSchema } from "@/lib/schema";
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
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSignUpMutation } from "@/redux/features/authApiSlice";
import { useToast } from "@/components/ui/use-toast";
import { errorParse } from "@/lib/utils";
import { useAppDispatch } from "@/redux/hooks";
import { setActivated, setAuth, setUser } from "@/redux/features/authSlice";

export default function page() {
  const router = useRouter();
  const [signUp, { isLoading, error }] = useSignUpMutation();
  const { toast } = useToast();
  const dispatch = useAppDispatch();

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
      re_password: "",
    },
  });

  function onSubmit(values: z.infer<typeof signupSchema>) {
    signUp({ ...values })
      .unwrap()
      .then(() => {
        toast({
          title: "Account created successfully",
          description: "Check your email to verify your account",
        });
        dispatch(setActivated());
        router.push("/auth/login");
      })
      .catch((error) => {
        const errMessage = errorParse(error?.data);
        toast({
          title: "Sign Up Failed",
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
        <Card className="w-[400px] text-left mx-auto my-auto">
          <CardHeader>
            <CardTitle>Create an account</CardTitle>
            <CardDescription>
              Enter your email below to create your account.
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
                        <FormLabel>Password</FormLabel>
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
                  <FormField
                    control={form.control}
                    name="re_password"
                    render={({ field }) => (
                      <FormItem className="flex flex-col space-y-1.5">
                        <FormLabel>Confirm Password</FormLabel>
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
                    Or sign up with
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <Button
                    variant={"outline"}
                    type="button"
                    onClick={handleSignInWithGithub}
                  >
                    <FaGithub className="mr-2 h-4 w-4" />
                    Github
                  </Button>
                  <Button
                    variant={"outline"}
                    type="button"
                    onClick={handleSignInWithGoogle}
                  >
                    <FaGoogle className="mr-2 h-4 w-4" />
                    Google
                  </Button>
                </div>
                <Button type="submit" size={"lg"} className="w-full">
                  {isLoading ? "Signing Up..." : "Sign Up"}
                </Button>
              </form>
            </Form>
            <p className="text-sm text-center mt-3">
              Already have an account?{" "}
              <Button variant={"link"} asChild>
                <Link href="/auth/login"> Sign in</Link>
              </Button>
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
