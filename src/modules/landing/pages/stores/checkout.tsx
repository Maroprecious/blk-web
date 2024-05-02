import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import CartCard from "@/shared/components/cards/retreats/cart-card";
import { PageLayout } from "@/shared/components/layout/page-layout";
import { Successful } from "@/shared/components/modals/successful";
import { useCallback, useEffect, useState } from "react";
import { LiaAngleRightSolid } from "react-icons/lia";
import { useCart } from "@/context/card.context";
import { formatter } from "@/lib/utils";
import { useAtom } from "jotai";
import { userAtom } from "@/store/store";
import { CreateOrderDto, UserData } from "@/utils/types";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useFormik } from "formik";
import { CheckoutValidationSchema } from "@/schema/auth";
import { useCountry, useStates } from "@/api/queries";
import { Select } from "@/components/ui/select";
import { useOrders } from "@/api/mutations";

const stripe_key = import.meta.env.VITE_STRIPE_KEY_TEST;

export default function CheckoutPage() {
  const [tab, setTab] = useState<number | null>(0);
  const [user] = useAtom<UserData>(userAtom);
  const { data } = useCountry();
  const { mutate, isPending, isSuccess } = useOrders();
  const stripePromise = loadStripe(stripe_key);
  const [stripeOptions, setStripeOptions] = useState({
    clientSecret: "",
  });
  const { products } = useCart();

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    setFieldValue,
    values,
  } = useFormik({
    initialValues: {
      address: "",
      country: "",
      state: "",
      zip: "",
      apartment: "",
      city: "",
      phone: "",
    },
    validationSchema: CheckoutValidationSchema,
    onSubmit: (values) => {
      console.group(values, "values");
      const payload: CreateOrderDto = {
        customer: {
          email: user.email,
          phone: values.phone,
          firstName: user.profile.firstName,
          lastName: user.profile.lastName,
        },
        address: {
          country: values.country,
          state: values.state,
          city: values.city,
          zip: values.zip,
          line1: values.address,
          apartment: values.apartment,
        },
        products: products.map((ele) => ({
          productId: Number(ele.productId),
          quantity: ele.count,
        })),
      };
      mutate(payload, {
        onSuccess: (data) => {
          console.log(data)
          setStripeOptions({
            clientSecret: data.data?.paymentIntent?.clientSecret,
          });
          setTab(1);
        },
        onError: (error) => {
          console.log(error, "error");
        },
      });
    },
  });
  const { refetch, data: states } = useStates(values.country);

  useEffect(() => {
    if (values.country) {
      refetch();
    }
  }, [values.country]);

  return (
    <PageLayout>
      <div className="w-full min-h-[100vh] flex pb-12 justify-between items-stretch ">
        <div className="w-[50%] bg-[#FFF] pt-16 pb-12 px-24">
          <h4 className="font-recoleta text-[#000000] font-normal text-[24px]">
            Checkout
          </h4>
          <div className="flex">
            {["Information", "Payment"].map((ele, id) =>
              id === 0 ? (
                <div className="flex items-center gap-[.5rem]" key={id}>
                  <p
                    className="text-[15px] font-light text-[#000000] cursor-pointer"
                    // onClick={() => handleActiveTab(id)}
                  >
                    {ele}
                  </p>
                  <div className="font-bold text-[19px]">
                    <LiaAngleRightSolid />
                  </div>
                </div>
              ) : (
                <p
                  className="text-[15px] ml-2 font-light text-[#000000] cursor-pointer"
                  // onClick={() => handleActiveTab(id)}
                >
                  {ele}
                </p>
              )
            )}
          </div>

          {tab === 0 ? (
            <>
              <p className="pt-6 font-light text-[14px] font-maison">
                SHIPPING INFORMATION
              </p>
              <div className="pt-6">
                <Input
                  className="bg-transparent"
                  label="Email address"
                  value={user.email}
                  disabled
                  placeholder="Your email address"
                />
                <div className="flex gap-[1rem]">
                  <Input
                    className="bg-transparent"
                    label="First name"
                    disabled
                    value={user?.profile?.firstName}
                    placeholder="Your first name"
                  />
                  <Input
                    className="bg-transparent"
                    label="Last name"
                    disabled
                    value={user?.profile?.lastName}
                    placeholder="Your last name"
                  />
                </div>
                <Input
                  className="bg-transparent"
                  label="Address"
                  name="address"
                  onChange={handleChange}
                  error={errors.address}
                  hasError={!!errors.address && touched.address}
                  onBlur={handleBlur}
                  placeholder="Your address"
                />
                <Input
                  className="bg-transparent"
                  label="Apartment, suite, etc. (optional)"
                  placeholder="Your apartment"
                  name="apartment"
                  onChange={handleChange}
                  error={errors.apartment}
                  hasError={!!errors.apartment && touched.apartment}
                  onBlur={handleBlur}
                />
                <Select
                  className="bg-transparent"
                  label="Country"
                  name="country"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  options={
                    Array.isArray(data?.data)
                      ? data.data.map((ele: any) => ({
                          label: ele.name,
                          value: ele.code,
                        }))
                      : []
                  }
                />
                <div className="flex gap-[1rem]">
                  <Select
                    className="bg-transparent"
                    label="State"
                    name="state"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    options={
                      Array.isArray(states?.data)
                        ? states.data.map((ele: any) => ({
                            label: ele.name,
                            value: ele.code,
                          }))
                        : []
                    }
                  />
                  <Input
                    className="bg-transparent"
                    label="City"
                    placeholder="Your city"
                    name="city"
                    onChange={handleChange}
                    error={errors.city}
                    hasError={!!errors.city && touched.city}
                    onBlur={handleBlur}
                  />

                  <Input
                    className="bg-transparent"
                    label="Zip code"
                    placeholder="Your zip code"
                    name="zip"
                    onChange={handleChange}
                    error={errors.zip}
                    hasError={!!errors.zip && touched.zip}
                    onBlur={handleBlur}
                  />
                </div>
                <Input
                  className="bg-transparent"
                  label="Phone"
                  placeholder="+1 000 – 0000 – 000"
                  name="phone"
                  onChange={handleChange}
                  error={errors.phone}
                  hasError={!!errors.phone && touched.phone}
                  onBlur={handleBlur}
                />
                <Button
                  isLoading={isPending}
                  onClick={() => handleSubmit()}
                  className="w-full mt-2 h-[56px] p-6"
                >
                  CONTINUE TO PAYMENT
                </Button>
              </div>
            </>
          ) : (
            <>
              <p className="pt-6 font-light text-[14px] font-maison">PAYMENT</p>
              <div className="pt-8">
                {stripeOptions.clientSecret && (
                  <Elements stripe={stripePromise} options={stripeOptions}>
                    <StripeWrapper />
                  </Elements>
                )}

                {/* this is to make the page get to the bottom else it would jump */}
                <p className="w-full mt-2 h-[56px] p-6 opacity-0">PAY</p>
                <p className="w-full mt-2 h-[56px] p-6 opacity-0">NOW</p>
              </div>
            </>
          )}
        </div>
        <div className="w-[50%] bg-gray-100 pb-12 pt-12 px-24">
          <div className="pt-20">
            {products.map((ele) => (
              <div key={ele.productId} className="w-[90%]">
                <CartCard {...ele} />
              </div>
            ))}
          </div>
          <div className=" border-t border-t-gray-400 w-[85%]">
            <div className="flex justify-between items-center pt-4">
              <p className="font-maison font-light text-[15px]">Subtotal</p>
              <p className="font-maison font-medium text-[15px]">$ 0.00</p>
            </div>
            <div className="flex justify-between items-center pt-4">
              <p className="font-maison font-light text-[15px]">Shipping fee</p>
              <p className="font-maison font-medium text-[15px]">$ 0.00</p>
            </div>
            <div className=" border-b border-b-gray-400 pb-4" />
            <div className="flex justify-between items-center pt-4">
              <p className="text-[24px] font-normal text-primary">Total</p>
              <p className="text-primary font-medium text-[24px]">
                {formatter.format(
                  products.length
                    ? products
                        .map((ele) => Number(ele?.price) * ele.count)
                        ?.reduce((a, b) => a + b)
                    : 0
                )}{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

const StripeWrapper = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState<boolean>(false);

  const confirmPayment = useCallback(async () => {

    setLoading(true);
    if (!stripe || !elements) {
      // setLoading(false);
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
      // confirmParams: {
      //   return_url: window.location.href,
      // },
    });

    console.log(result, "result");
    if (result.error) {
      console.log(result.error.message);
    } else if (result.paymentIntent.status === "succeeded") {
      setShowPaymentModal(true);
    }
    setLoading(false);
  }, []);
  return (
    <>
      <PaymentElement />
      <Button
        isLoading={loading}
        onClick={() => confirmPayment()}
        className="w-full mt-2 h-[56px] p-6"
      >
        PAY NOW
      </Button>
      {showPaymentModal && <Successful />}
    </>
  );
};
