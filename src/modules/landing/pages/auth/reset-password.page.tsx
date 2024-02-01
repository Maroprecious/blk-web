import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import { AuthLayout } from "@/shared/components/layout/auth.layout";

export default function ResetPasswordPage() {
  return (
    <AuthLayout>
      <div className="w-full pt-20 lg:pb-[23em] flex justify-center items-center">
        <div className="w-[38%] max-w-[1440px]">
          <h1 className="font-recoleta font-medium text-[32px]">
            Reset Password
          </h1>
          <p className="text-gray-900 font-maison text-[17px] pb-8">
            Wer have sent a reset password link to your email containing
            instructions.{" "}
          </p>
          <div>
            <Input
              label="New password"
              type="password"
              placeholder="New password"
            />
            <Input
              label="Confirm password"
              type="password"
              placeholder="Confirm your password"
            />
            <Button className="w-full h-[56px] text-[16px]">RESET PASSWORD</Button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
