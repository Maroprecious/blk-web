import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import { AuthLayout } from "@/shared/components/layout/auth.layout";

export default function LoginPage() {
  return (
    <AuthLayout>
      <div className="w-full pt-20 lg:pb-[23em] flex justify-center items-center">
        <div className="w-[38%] max-w-[1440px]">
          <h1 className="font-recoleta pb-6 font-medium text-[32px]">
            Log in to your account
          </h1>
          <div>
            <Input label="Email address" placeholder="Your email address" />
            <Input
              label="Password"
              type="password"
              placeholder="Your password"
            />
            <p className="text-gray-900 font-maison text-[16px] pb-6">
              <a>Forgot Password?</a>
            </p>
            <Button className="w-full h-[56px] text-[16px]">LOGIN</Button>
            <Button className="w-full border border-primary bg-sage-300 h-[56px] text-[16px] hover:text-white text-primary my-6 uppercase">
              login with google
            </Button>
            <h3 className="font-maison text-gray-900 text-[16px] uppercase text-center">
              Don’t have an account? Sign UP
            </h3>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
