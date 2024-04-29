import { useLogin, useSignUp } from "@/api/mutations";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import { AuthLayout } from "@/shared/components/layout/auth.layout";
import { signUpValidationSchema } from "@/schema/auth";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function CreateAccountPage() {
  const { mutate, isPending } = useSignUp();
  const { mutateAsync: login, isPending: isLoading } = useLogin();
  // const {refetch, data} = useGetUser();
  const navigation = useNavigate();

  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues: {
        email: "",
        password: "",
        password_confirmation: "",
      },
      validationSchema: signUpValidationSchema,
      onSubmit: async (values) => {
        try {
          mutate(
            {
              email: values.email,
              password: values.password,
            },
            {
              onSuccess: async () => {
                const user = await login({
                  email: values.email,
                  password: values.password,
                });
                localStorage.setItem("accessToken", user?.data?.accessToken);
                localStorage.setItem("refreshToken", user?.data?.refreshToken);
                toast.success("User created successfully");
                navigation('/customize-profile')
              },
              onError: (data: any) => {
                toast.error(
                  data?.response?.data?.error.message ??
                    "An error occured, please try again"
                );
              },
            }
          );
        } catch (error: any) {
          console.log(error, "ll");
        }
      },
    }
  );

  return (
    <AuthLayout>
      <div className="w-full pt-20 lg:pb-[23em] flex justify-center items-center">
        <div className="w-[38%] max-w-[1440px]">
          <h1 className="font-recoleta pb-6 font-medium text-[32px]">
            Create an account
          </h1>
          <div>
            <Input
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              label="Email address"
              error={errors.email}
              hasError={!!errors.email && touched.email}
              placeholder="Your email address"
            />
            <Input
              label="Password"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password}
              hasError={!!errors.password && touched.password}
              placeholder="Your password"
            />
            <Input
              label="Confirm password"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password_confirmation}
              hasError={
                !!errors.password_confirmation && touched.password_confirmation
              }
              name="password_confirmation"
              placeholder="Your password"
            />
            <Button
              isLoading={isPending || isLoading}
              onClick={() => handleSubmit()}
              className="w-full h-[56px] text-[16px]"
            >
              SIGN UP
            </Button>
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
