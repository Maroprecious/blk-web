// import BRHeader from "@/shared/components/header/header";
// import { useState } from "react";
// import { IoEyeOutline } from "react-icons/io5";
// import { BiHide } from "react-icons/bi";
// import { Link } from "react-router-dom";
// import Footer from "@/components/landing/Footer";
// import useFetch from "@/hooks/useFetch";
// import { URL } from "@/api/axios";
// // import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   // const navigate = useNavigate();
//   const [visiblePassword, setVisiblePassword] = useState(false);
//   const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);

//   const [confirmPassword, setConfirmPwd] = useState("");

//   // const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
//   // const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

//   // const REGISTER_URL = "/auth/signup";
//   // const handleSubmit = async (
//   //   e: React.FormEvent<HTMLFormElement>
//   // ): Promise<void> => {
//   //   e.preventDefault();
//   //   try {
//   //     const response = await axios.post(REGISTER_URL, { email, password });
//   //     const token = response.data.accessToken;
//   //     localStorage.setItem("authToken", token);
//   //     navigate("/");
//   //     setUser("");
//   //     setPwd("");
//   //     setConfirmPwd("");
//   //     setErrMsg("");
//   //   } catch (err: any) {
//   //     if (!err?.response) {
//   //       console.log("No Server Response");
//   //     } else if (err.response?.status === 409) {
//   //       console.log("Username Taken");
//   //     } else {
//   //       console.log("Registration Failed");
//   //       console.log(errMsg);
//   //     }
//   //   }
//   // };

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const { data } = useFetch(`${URL}/auth/signup`, "POST", formData); // Call the useFetch hook

//   const handleInputChange = (e: any) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//     console.log(data);

//     // Call the useFetch hook to send a POST request with the form data
//   };

//   return (
//     <div>
//       <div>
//         <BRHeader />
//         <section className="px-4 lg:px-[120px] mt-[150px] lg:mt-[211px] ">
//           <div className="max-w-[468px] mx-auto ">
//             <h2 className="text-[32px] font-amsterdam mb-[65px] text-left whitespace-nowrap">
//               Create an account
//             </h2>
//             <form onSubmit={handleSubmit} className="w-full grid items-center">
//               <div>
//                 <label htmlFor="email" className="text-sm">
//                   Email address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   required
//                   autoComplete="off"
//                   // aria-invalid={validName ? "false" : "true"}
//                   placeholder="Your email address"
//                   className="border w-full mt-2 border-[#EAECF0] focus:outline-none placeholder:font-light bg-transparent block placeholder:text-[#667085] p-3"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                 />
//                 {/* <p>{form.errors.email && "Invalid Email"}</p> */}
//               </div>
//               <div className="relative mt-4">
//                 <label htmlFor="" className="text-sm">
//                   Password
//                 </label>
//                 <input
//                   required
//                   type={visiblePassword ? "text" : "password"}
//                   placeholder="Enter password"
//                   className="border w-full mt-2 border-[#EAECF0] focus:outline-none bg-transparent block placeholder:text-[#667085] p-3"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleInputChange}
//                 />
//                 <div
//                   className="absolute top-12 right-2 "
//                   onClick={() => {
//                     setVisiblePassword(!visiblePassword);
//                   }}
//                 >
//                   {visiblePassword ? (
//                     <BiHide width={38} height={38} />
//                   ) : (
//                     <IoEyeOutline width={38} height={38} />
//                   )}
//                 </div>
//               </div>
//               <div className="relative mt-4">
//                 <label htmlFor="" className="text-sm">
//                   Confirm password
//                 </label>
//                 <input
//                   required
//                   type={visibleConfirmPassword ? "text" : "password"}
//                   placeholder="Confirm password"
//                   className="border w-full mt-2 border-[#EAECF0] focus:outline-none bg-transparent block placeholder:text-[#667085] p-3"
//                   onChange={(e) => setConfirmPwd(e.target.value)}
//                   value={confirmPassword}
//                 />
//                 <div
//                   className="absolute top-12 right-2 "
//                   onClick={() => {
//                     setVisibleConfirmPassword(!visibleConfirmPassword);
//                   }}
//                 >
//                   {visibleConfirmPassword ? (
//                     <BiHide width={38} height={38} />
//                   ) : (
//                     <IoEyeOutline width={38} height={38} />
//                   )}
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-[#946C3C] uppercase h-14 text-white mt-6"
//               >
//                 Sign up
//               </button>
//               <button className="w-full bg-transparent border border-[#946C3C] uppercase h-14 text-[#946C3C] mt-6">
//                 Sign up with google
//               </button>
//             </form>
//             <p className="uppercase text-center mt-4">
//               <Link to="/login">Already have an account? Log in</Link>
//             </p>
//           </div>
//         </section>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Signup;

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
                navigation("/customize-profile");
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
        <div className="lg:w-[38%] lg:max-w-[1440px] w-[90%] mx-auto">
          <h1 className="font-arapey pb-6 font-light text-[32px]">
            Create an account
          </h1>
          <div>
            <Input
              className="font-arapey text-[16px]"
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
              className="font-arapey text-[16px]"
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
              className="font-arapey text-[16px]"
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
              className="w-full h-[56px] text-[16px] font-arapey font-normal"
            >
              SIGN UP
            </Button>
            <Button className="w-full font-arapey font-normal border border-primary bg-sage-300 h-[56px] text-[16px] hover:text-white text-primary my-6 uppercase">
              sign up with google
            </Button>
            <h3
              className=" font-arapey font-normal text-gray-900 text-[16px] text-center cursor-pointer"
              onClick={() => navigation("/login")}
            >
              Already have an account? Log in
            </h3>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
