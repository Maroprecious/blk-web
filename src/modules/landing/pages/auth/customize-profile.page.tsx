import { useCompleteProfile } from "@/api/mutations";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { createProfileValidationSchema } from "@/schema/profile";
import { AuthLayout } from "@/shared/components/layout/auth.layout";
import { continents } from "@/utils/continents";
import { useFormik } from "formik";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { FiCamera } from "react-icons/fi";
import { useAtom } from "jotai";
import { userAtom } from "@/store/store";
import useGetUser from "@/api/queries";
import { useNavigate } from "react-router-dom";

export default function CustomizeProfilePage() {
  const [imageUrl, setImageUrl] = useState<string>("");
  const { mutate, isPending } = useCompleteProfile();
  const [, setUser] = useAtom(userAtom);
  const { refetch, isSuccess, isPending: isLoading } = useGetUser();
  const navigate = useNavigate();

  const handleUploadImage = useCallback(() => {
    const doc = document.createElement("input");
    doc.type = "file";
    doc.accept = "image/*";
    doc.onchange = (ev: any) =>
      setImageUrl(URL.createObjectURL(ev.target.files[0]));
    doc.hidden = true;
    doc.click();
  }, [setImageUrl]);

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dob: "",
      continent: "",
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
            photoUrl: "l",
          },
          {
            onSuccess: (data) => {
              refetch().then((res) => {
                if (isSuccess) {
                  setUser(res?.data);
                  toast.success("User created successfully");
                  navigate('/home-tab')
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

  return (
    <AuthLayout>
      <div className="w-full pt-20 lg:pb-[23em] flex justify-center items-center">
        <div className="w-[38%] max-w-[1440px]">
          <h1 className="font-recoleta pb-6 font-medium text-[32px]">
            Customise your profile
          </h1>
          <div>
            <div
              onClick={handleUploadImage}
              style={
                imageUrl
                  ? {
                      backgroundImage: `url('${imageUrl}')`,
                    }
                  : {}
              }
              className="w-[114px] bg-center bg-cover bg-no-repeat cursor-pointer h-[114px] rounded-full flex justify-center items-center bg-sage-200 mb-4"
            >
              <FiCamera size={40} strokeWidth={1} color="#000" />
            </div>
            <Input
              onChange={handleChange}
              onBlur={handleBlur}
              hasError={!!errors.lastName && touched.lastName}
              error={errors.lastName}
              label="Last name"
              placeholder="Your last name"
              name="lastName"
            />
            <Input
              onChange={handleChange}
              onBlur={handleBlur}
              hasError={!!errors.firstName && touched.firstName}
              error={errors.firstName}
              name="firstName"
              label="First name"
              placeholder="Your first name"
            />
            <Input
              name="dob"
              onChange={handleChange}
              onBlur={handleBlur}
              hasError={!!errors.dob && touched.dob}
              error={errors.dob}
              label="Birthday"
              placeholder="DD/MM/YYYY"
              onFocus={(e) => (e.currentTarget.type = "date")}
            />
            <Select
              label="Location (Continent)"
              name="continent"
              onChange={handleChange}
              onBlur={handleBlur}
              options={continents}
              onSelect={(value) => setFieldValue("continent", value)}
            />
            <Button
              isLoading={isPending || isLoading}
              className="w-full h-[56px] text-[16px]"
              onClick={() => handleSubmit()}
            >
              SETUP ACCOUNT
            </Button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
