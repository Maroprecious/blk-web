import Input from "@/components/ui/input";
import { SidebarCard } from "../sidebar-card";
import { Select } from "@/components/ui/select";
import { FaStar } from "react-icons/fa6";
import { Button } from "../../buttons/button";
import React, { useEffect } from "react";
import { SetStateAction, useAtom } from "jotai";
import { useBookRetreats } from "@/api/mutations";
import { userAtom } from "@/store/store";
import { useFormik } from "formik";
import { bookRetreatValidationSchema } from "@/schema/profile";
import toast from "react-hot-toast";
import { bookRetreatPayload } from "@/utils/types";

export const BookRetreat = ({
  setShow,
  selected,
  minDeposit,
  id
}: {
  setShow: React.Dispatch<SetStateAction<boolean>>;
  selected: {
    image: string;
    rating: number;
    address: string;
    name: string;
  };
  minDeposit: number;
  id:number
}) => {
  const { mutate, isPending } = useBookRetreats(Number(id));
  const [user] = useAtom(userAtom);
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    values,
    setFieldValue,
  } = useFormik<Omit<bookRetreatPayload, "hotelName" | "retreatId">>({
    initialValues: {
      email: "",
      name: "",
      paymentType: "partial",
      amount: 0,
    },
    validationSchema: bookRetreatValidationSchema,
    onSubmit: async (values) => {
      try {
        mutate(
          {
            email: values.email,
            name: values.name,
            amount: Number(values.amount),
            paymentType: values.paymentType,
            hotelName: selected.name,
            retreatId: Number(id),
          } as bookRetreatPayload,
          {
            onSuccess: async () => {
              toast.success("Retreat booked successfully");
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
    <SidebarCard title=" Book Retreat" onClick={() => setShow(false)}>
      <div className="flex relative flex-col justify-between">
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
          <Select
            name="paymentType"
            label="Payment type"
            className="bg-transparent"
            options={[
              {
                label: "Partial payment",
                value: "partial",
              },
              {
                label: "Full payment",
                value: "full",
              },
            ]}
            onSelect={(value) => setFieldValue("paymentType", value)}
          />
       
            <div>
              <Input
                name="amount"
                className="bg-transparent"
                label="Amount"
                placeholder=""
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.amount}
                error={errors.amount}
                hasError={!!errors.amount && touched.amount}
              />
              <p>{`Minimum deposit is $${minDeposit}`}</p>
            </div> 
        
          <div className="flex gap-4">
            <div
              className="w-[50%] relative h-[204px] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${selected.image}')`,
              }}
            >
              <div className="flex items-center justify-start gap-2 absolute top-[86%] left-[5%]">
                <div className="flex items-start gap-[.3rem] justify-end">
                  {Array(5)
                    .fill("_")
                    .map((ele, idx) =>
                      idx + 1 <= selected.rating ? (
                        <FaStar color="#F79009" />
                      ) : (
                        <FaStar color="#fff" />
                      )
                    )}
                </div>
                <p className="text-[15px] text-white">{selected.rating}</p>
              </div>
            </div>
            <div>
              {" "}
              <p className="text-[20px] text-gray-900 font-normal">
                {selected.name}
              </p>
              <p className="text-[16px] text-gray-900 font-normal">
                {selected.address}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start gap-4 absolute top-[75vh] w-full ">
          <Button
            title="Cancel"
            variant="outline"
            onClick={() => setShow(false)}
          />
          <Button title="Book Retreat" variant="solid" onClick={() => handleSubmit()} />
        </div>
      </div>
    </SidebarCard>
  );
};
