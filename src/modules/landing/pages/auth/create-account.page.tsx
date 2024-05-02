import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import { AuthLayout } from "@/shared/components/layout/auth.layout";

export default function CreateAccountPage() {
  return (
    <AuthLayout>
      <div className="w-full mt-36 pt-20 lg:pb-[23em] flex justify-center items-center">
        <div className="w-[38%] max-w-[1440px]">
          <h1 className="font-recoleta pb-6 font-medium text-[32px]">
            Create an account
          </h1>
          <div>
            <Input label="Email address" placeholder="Your email address" />
            <Input
              label="Password"
              type="password"
              placeholder="Your password"
            />
            <Input
              label="Confirm password"
              type="password"
              placeholder="Your password"
            />
            <Button className="w-full h-[56px] text-[16px]">SIGN UP</Button>
            <Button className="w-full border border-primary bg-sage-300 h-[56px] text-[16px] hover:text-white text-primary my-6 uppercase">
              sign up with google
            </Button>
            <h3 className="font-maison text-gray-900 text-[16px] uppercase text-center">
              Already have an account? Log in
            </h3>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
