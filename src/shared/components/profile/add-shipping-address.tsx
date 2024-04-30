import { Button } from "@/components/ui/button";
import { AddressCard } from "../cards/address/address-card";
import Input from "@/components/ui/input";
import { addShippingValidationSchema } from "@/schema/auth";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useAddShippingAdress } from "@/api/mutations";
import { useGetShippingAddress } from "@/api/queries";
import { useState } from "react";

export const ShippingAddress = () => {
  const [show, setShow] = useState(false);
  const { mutate } = useAddShippingAdress();
  const { data, refetch, isSuccess } = useGetShippingAddress();
  console.log(data?.data, "address");

  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
        email: "",
        zip: "",
        city: "",
        state: "",
        suit: "",
      },
      validationSchema: addShippingValidationSchema,
      onSubmit: async (values) => {
        try {
          mutate(
            {
              firstName: values.firstName,
              address: values.address,
              phone: values.phone,
              suit: values.suit,
              city: values.city,
              lastName: values.lastName,
              zip: values.zip,
              email: values.email,
              state: values.state,
            },
            {
              onSuccess: (data) => {
                refetch().then((res) => {
                  if (isSuccess) {
                    toast.success("Shipping address added successfully");
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
    <>
      {" "}
      <div className="flex w-[73%] px-6 flex-wrap justify-start items-center gap-4">
        {data?.data?.map((element, idx: number) => (
          <div className="w-[32%]" key={idx}>
            <AddressCard
              firstName={element.firstName}
              lastName={element.lastName}
              address={element.address}
              phone={element.phone}
            />
          </div>
        ))}
      </div>
      <Button className="text-[#fff] mx-6 mt-2" onClick={() => setShow(!show)}>
        ADD SHIPPING ADDRESS
      </Button>
      {show && (
        <div className="flex mt-8 px-6 flex-col w-full bg-white flex-wrap justify-start items-start gap-4">
          <div className="flex w-[73%] mr-[27%] gap-[2rem]">
            <Input
              label="Email address"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              error={errors.email}
              name="email"
              hasError={!!errors.email && touched.email}
              className="bg-transparent"
              placeholder="Your email address"
            />
            <Input
              label="Address"
              onBlur={handleBlur}
              onChange={handleChange}
              error={errors.address}
              name="address"
              className="bg-transparent"
              hasError={!!errors.address && touched.address}
              placeholder="Your address"
            />
          </div>
          <div className="flex w-[73%] mr-[27%] gap-[2rem]">
            <Input
              label="Phone"
              className="bg-transparent"
              onBlur={handleBlur}
              onChange={handleChange}
              error={errors.phone}
              name="phone"
              hasError={!!errors.phone && touched.phone}
              inputLeftElement={
                <div className="justify-center items-center gap-[3px] pl-2">
                  <p className="text-[13px] text-gray-500">+1</p>
                  <div className="w-[0.4px] h-[0.3px] bg-[gray-500]" />
                </div>
              }
              placeholder="000 – 0000 – 000"
            />
            <Input
              className="bg-transparent"
              label="Apartment, suite, etc. (optional)"
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Apartment no"
              error={errors.suit}
              name="suit"
              hasError={!!errors.suit && touched.suit}
            />
          </div>
          <div className="flex w-[73%] mr-[27%] gap-[2rem]">
            <Input
              className="bg-transparent"
              label="First name"
              onBlur={handleBlur}
              onChange={handleChange}
              error={errors.firstName}
              name="firstName"
              hasError={!!errors.firstName && touched.firstName}
              placeholder="Your first name"
            />
            <Input
              className="bg-transparent"
              label="Last name"
              onBlur={handleBlur}
              onChange={handleChange}
              error={errors.lastName}
              hasError={!!errors.lastName && touched.lastName}
              name="lastName"
              placeholder="Your last name"
            />
          </div>
          <div className="flex w-[73%] mr-[27%] gap-[2rem]">
            <Input
              className="bg-transparent"
              label="City"
              onBlur={handleBlur}
              onChange={handleChange}
              name="city"
              error={errors.city}
              hasError={!!errors.city && touched.city}
              placeholder="Your city"
            />
            <Input
              className="bg-transparent"
              label="State"
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Your state"
              name="state"
              error={errors.state}
              hasError={!!errors.state && touched.state}
            />

            <Input
              className="bg-transparent"
              label="ZIP code"
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Your zip code"
              name="zip"
              error={errors.zip}
              hasError={!!errors.zip && touched.zip}
            />
          </div>
          <div className="pb-[20px] flex justify-start items-start">
            <Button onClick={() => handleSubmit()}>ADD SHIPPING ADDRESS</Button>
          </div>
        </div>
      )}
    </>
  );
};
