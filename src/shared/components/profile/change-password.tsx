"use client";

import { useChangePassword } from "@/api/mutations";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import { updatePasswordValidationSchema } from "@/schema/auth";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { FiEye } from "react-icons/fi";

export const ChangePassword = () => {
  const { mutate } = useChangePassword();
  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues: {
        oldPassword: "",
        newPassword: "",
      },
      validationSchema: updatePasswordValidationSchema,
      onSubmit: async (values) => {
        try {
          mutate(
            {
              oldPassword: values.oldPassword,
              newPassword: values.newPassword,
            },
            {
              onSuccess: (data) => {
                toast.success("password updated successfully");
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
    <>
      <div className={"w-[72%] px-6 flex gap-[1.5rem] mt-6"}>
        <Input
          className="bg-transparent"
          label="Password"
          placeholder="Your password"
          type="password"
          onChange={handleChange}
          onBlur={handleBlur}
          name="oldPassword"
          error={errors.oldPassword}
          hasError={!!errors.oldPassword && touched.oldPassword}
          inputRightElement={<FiEye color="black" />}
        />
        <Input
          className="bg-transparent"
          label="New Password"
          placeholder="New password"
          type="password"
          inputRightElement={<FiEye color="black" />}
          onChange={handleChange}
          onBlur={handleBlur}
          name="newPassword"
          error={errors.newPassword}
          hasError={!!errors.newPassword && touched.newPassword}
        />
      </div>
      <Button onClick={() => handleSubmit()}>SAVE CHANGES</Button>
    </>
  );
};
