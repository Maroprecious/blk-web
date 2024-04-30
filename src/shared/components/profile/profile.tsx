"use client";

import { useEditProfile } from "@/api/mutations";
import { useGetUser } from "@/api/queries";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { createProfileValidationSchema } from "@/schema/profile";
import { userAtom } from "@/store/store";
import { continents } from "@/utils/continents";
import { useFormik } from "formik";
import { useAtom } from "jotai";
import { useEffect } from "react";
import toast from "react-hot-toast";

export const EditProfile = () => {
  const [user, setUser] = useAtom(userAtom);
  const { refetch, isSuccess, isPending: isLoading } = useGetUser();
  const { mutate } = useEditProfile();
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    setFieldValue,
    values,
    setValues,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dob: "",
      continent: "",
      photoUrl: "",
    },
    validationSchema: createProfileValidationSchema,
    onSubmit: async (values) => {
      try {
        mutate(
          {
            firstName: values.firstName,
            lastName: values.lastName,
            dob: values.dob,
            continent: values.continent,
            photoUrl: "https://www.text.com",
          },
          {
            onSuccess: (data) => {
              refetch().then((res) => {
                if (isSuccess) {
                  setUser(res?.data);
                  toast.success("User updated successfully");
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
  });
  useEffect(() => {
    if (user) {
      setValues({
        dob: user?.profile?.birthDate,
        firstName: user.profile?.firstName,
        lastName: user?.profile?.lastName,
        continent: user.profile?.continent,
        photoUrl: user.profile?.photoUrl,
      });
    }

  }, [user]);
  return (
    <div className="w-[71%] px-6 mt-6">
      <div className="flex gap-[1.5rem] items-center">
        <Input
          className="bg-transparent"
          label="First name"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.firstName}
          hasError={!!errors.firstName && touched.firstName}
        />
        <Input
          className="bg-transparent"
          label="Last name"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.lastName}
          hasError={!!errors.lastName && touched.lastName}
        />
        <Input
          name="dob"
          className="bg-transparent"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.dob}
          hasError={!!errors.dob && touched.dob}
          error={errors.dob}
          label="Birthday"
          placeholder="DD/MM/YYYY"
          onFocus={(e) => (e.currentTarget.type = "date")}
        />
      </div>
      <div className="flex gap-[1.5rem] items-center">
        <Input
          className="bg-transparent"
          label="Email address"
          value={user.email}
          disabled
        />
        <Select
         className="bg-transparent"
          label="Location (Continent)"
          name="continent"
          onChange={handleChange}
          onBlur={handleBlur}
          options={continents}
          onSelect={(value) => setFieldValue("continent", value)}
        />
      </div>
      <Button
        isLoading={isLoading}
        variant="border"
        className="text-[#946C3C]"
        onClick={() => handleSubmit()}
      >
        EDIT PROFILE DETAILS
      </Button>
    </div>
  );
};
