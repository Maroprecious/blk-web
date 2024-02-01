import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import { AuthLayout } from "@/shared/components/layout/auth.layout";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout>
      <div className="w-full pt-20 lg:pb-[23em] flex justify-center items-center">
        <div className="w-[38%] max-w-[1440px]">
          <h1 className="font-recoleta font-medium text-[32px]">
            Forgot Password
          </h1>
          <p className="text-gray-900 font-maison text-[17px] pb-8">
            We will send you an email with instructions on how to recover it
          </p>
          <div>
            <Input label="Email address" placeholder="Your email address" />
            <Button className="w-full h-[56px] text-[16px]">CONTINUE</Button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
