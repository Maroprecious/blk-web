import { useLogin } from "@/api/mutations";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import { signInValidationSchema } from "@/schema/auth";
import { AuthLayout } from "@/shared/components/layout/auth.layout";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useGetUser } from "@/api/queries";
import { useAtom } from "jotai";
import { userAtom } from "@/store/store";
import api from "@/utils/api";


export default function LoginPage() {
  const { mutate, isPending } = useLogin();
  const { refetch, isSuccess } = useGetUser();
  const [, setUser] = useAtom(userAtom);
  const navigate = useNavigate();
  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: signInValidationSchema,
      onSubmit: async (values) => {
        try {
          mutate(
            {
              email: values.email,
              password: values.password,
            },
            {
              onSuccess: async (user) => {
                localStorage.setItem("accessToken", user?.data?.accessToken);
                localStorage.setItem("refreshToken", user?.data?.refreshToken);
                refetch().then((res) => {
                  if (isSuccess) {
                    if (user?.data?.isProfileFilled) {
                      return navigate("/customize-profile");
                    }
                    setUser(res?.data?.data);
                    toast.success("User logged in successfully");
                    navigate("/home-tab");
                  }
                });
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
            Log in to your account
          </h1>
          <div>
            <Input
              label="Email address"
              placeholder="Your email address"
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
              error={errors.email}
              hasError={!!errors.email && touched.email}
            />
            <Input
              label="Password"
              type="password"
              placeholder="Your password"
              onChange={handleChange}
              onBlur={handleBlur}
              name="password"
              error={errors.password}
              hasError={!!errors.password && touched.password}
            />
            <p className="text-gray-900 font-maison text-[16px] pb-6">
              <a>Forgot Password?</a>
            </p>
            <Button
              className="w-full h-[56px] text-[16px]"
              onClick={() => handleSubmit()}
              isLoading={isPending}
            >
              LOGIN
            </Button>
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
