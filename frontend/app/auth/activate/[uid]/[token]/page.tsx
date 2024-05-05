"use client";

import {
  useActivateAccountMutation,
  useResendActivationEmailMutation,
} from "@/redux/features/authApiSlice";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { errorParse } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = ({ params }: { params: { uid: string; token: string } }) => {
  const [activate, { isLoading: isActivating }] = useActivateAccountMutation();
  const [resendActivation, { isLoading: isResendind }] =
    useResendActivationEmailMutation();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const email = useAppSelector((state) => state.auth.user.email);

  const handleResend = () => {
    console.log("Resend Email", email);
    resendActivation(email)
      .unwrap()
      .then(() => {
        toast({
          description: "Activation email has been sent successfully",
        });
        dispatch()
      })
      .catch((error) => {
        const errMessage = errorParse(error?.data);
        toast({
          title: "Resend Activation Email Failed",
          description: errMessage,
          variant: "destructive",
        });
      });
  };

  const handleActivate = () => {
    activate(params)
      .unwrap()
      .then(() => {
        toast({
          description: "Account has been activated successfully",
        });
        router.push("/auth/login");
      })
      .catch((error) => {
        const errMessage = errorParse(error?.data);
        toast({
          title: "Account Activation Failed",
          description: errMessage,
          variant: "destructive",
          action: (
            <button className="" onClick={handleResend}>
              Resend Email
            </button>
          ),
        });
      });
  };

  return (
    <>
      <div className="flex max-w-screen-2xl h-screen mx-auto px-4 justify-center">
        <Card className="w-[400px] max-h-[570px] text-left mx-auto my-auto">
          <CardHeader>
            <CardTitle>Activating Your Account</CardTitle>
            <CardDescription>
              Thank you for signing up. In order to activate your account, click
              the button below.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" onClick={handleActivate}>
              {isActivating ? "Activating..." : "Activate account"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Page;
