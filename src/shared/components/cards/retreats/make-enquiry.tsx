import Input from "@/components/ui/input";
import { SidebarCard } from "../sidebar-card";
import { Button } from "../../buttons/button";
import { useFormik } from "formik";
import { retreatEnquiryValidationSchema } from "@/schema/profile";
import { useMakeEnquiry } from "@/api/mutations";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { userAtom } from "@/store/store";
import { useAtom } from "jotai";

export const MakeEnquiryCard = ({
  onclick,
  params,
}: {
  onclick: () => void;
  params: number;
}) => {
  const { mutate, isPending } = useMakeEnquiry();
  const [user] = useAtom(userAtom);
  console.log(user, "user");
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    values,
    setFieldValue,
  } = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
    validationSchema: retreatEnquiryValidationSchema,
    onSubmit: async (values) => {
      try {
        mutate(
          {
            email: values.email,
            name: values.name,
            message: values.message,
            retreatId: Number(params),
          },
          {
            onSuccess: async () => {
              toast.success("Enquiry sent successfully");
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
      setFieldValue("email", user?.email);
      setFieldValue(
        "name",
        `${user?.profile?.firstName} ${user?.profile?.lastName}`
      );
    }
  }, [user]);
  return (
    <SidebarCard title=" Make Enquiry" onClick={onclick}>
      <div className="flex relative h-[100vh] flex-col justify-between">
        <div className="pt-4">
          <Input
            name="name"
            className="bg-transparent"
            label="Full name"
            placeholder=""
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            error={errors.name}
            hasError={!!errors.name && touched.name}
          />
          <Input
            name="email"
            className="bg-transparent"
            label="Email address"
            placeholder=""
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            error={errors.email}
            hasError={!!errors.email && touched.email}
          />
          <Input
            name="message"
            className="bg-transparent"
            style={{ height: "100px" }}
            label="Enquiry"
            placeholder="Enter Message"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
            error={errors.message}
            hasError={!!errors.message && touched.message}
          />
        </div>
        <div className="flex items-center justify-start gap-4 absolute top-[90%] w-full ">
          <Button title="Cancel" variant="outline" onClick={onclick} />
          <Button title="Make Enquiry" variant="solid" onClick={() => handleSubmit()} />
        </div>
      </div>
    </SidebarCard>
  );
};
