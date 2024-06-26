// // import BRHeader from "@/shared/components/header/header";
// // import { CgMathMinus, CgMathPlus } from "react-icons/cg";
// // import emptyCart from "@/assets/images/emptyCart.png";
// // import { useCart } from "@/context/cart";
// // import { useState } from "react";
// // // import { Successful } from "@/shared/components/modals/successful";
// // import { loadStripe } from "@stripe/stripe-js";
// // import { LiaAngleRightSolid } from "react-icons/lia";
// // import ShippingInfo from "./ShippingInfo";
// // import Payment from "./Payment";
// // import { Elements } from "@stripe/react-stripe-js";
// // import { Link } from "react-router-dom";

// // const CheckoutPage: React.FC = () => {
// //   const stripePromise = loadStripe(
// //     "pk_live_51PEFql2NydvrzulHIQ7Dwq1qrAILvwfnAQb2yy7sk3UPUeCFrErG99pvrY6HyrQpMxzlKgrpKt6f3o1rT6a5ozEj00N6AjaP7q"
// //   );

// //   const options = {
// //     mode: "payment",
// //     amount: 210,
// //     currency: "usd",
// //     // Fully customizable with appearance API.
// //     appearance: {
// //       /*...*/
// //     },
// //   };

// //   const { cart, increaseQuantity, decreaseQuantity, calculateTotalPrice } =
// //     useCart();
// //   const itemPrices = cart.map((item) => item.price);
// //   const cartTotal = calculateTotalPrice();
// //   const [tab, setTab] = useState<number | null>(0);
// //   const handleActiveTab = (id: number) => {
// //     setTab(id);
// //   };

// //   if (cart.length <= 0) {
// //     return (
// //       <>
// //         {" "}
// //         <div className="flex flex-col justify-center mt-40 items-center">
// //           <img src={emptyCart} alt="empty Cart" />
// //           <p className="font-amsterdam text-2xl">Cart is empty</p>
// //         </div>
// //         <Link to="/store" className="flex justify-center">
// //           <button className="bg-[#946C3C] w-full max-w-[300px] mx-auto uppercase text-white   py-4  mt-[63px] ">
// //             go to shop
// //           </button>
// //         </Link>
// //       </>
// //     );
// //   }
// //   return (
// //     <div className="w-full items-stretch mt-20  flex pb-12 justify-between items-center">
// //       <BRHeader />
// //       <div className="w-[50%] bg-[#E6E5DE] pt-16 pb-12 px-24">
// //         <div className="flex ">
// //           {["Information", "Payment"].map((ele, id) =>
// //             id === 0 ? (
// //               <div className="flex items-center gap-[.5rem]" key={id}>
// //                 <p
// //                   className="text-[15px] font-light text-[#000000] cursor-pointer"
// //                   onClick={() => handleActiveTab(id)}
// //                 >
// //                   {ele}
// //                 </p>
// //                 <div className="font-bold text-[19px]">
// //                   <LiaAngleRightSolid />
// //                 </div>
// //               </div>
// //             ) : (
// //               <p
// //                 className="text-[15px] ml-2 font-light text-[#000000] cursor-pointer"
// //                 onClick={() => handleActiveTab(id)}
// //               >
// //                 {ele}
// //               </p>
// //             )
// //           )}
// //         </div>

// //         {tab === 0 ? (
// //           <>
// //             <ShippingInfo />
// //           </>
// //         ) : (
// //           <>
// //             {
// //               <Elements stripe={stripePromise} options={options}>
// //                 <Payment />
// //               </Elements>
// //             }
// //           </>
// //         )}
// //       </div>
// //       <div className="w-[50%] bg-gray-100 pb-12 pt-12 px-24">
// //         <div className="pt-20 w-[403px]">
// //           {cart?.map((cartItem) => {
// //             return (
// //               <div key={cartItem.id} className="w-full">
// //                 <div className="w-full h-[180px] border-b border-gray-200 gap-[.8rem] flex justify-start items-center">
// //                   <div className="w-[147px] h-[138px]">
// //                     <img src={cartItem.images[0]} alt="" className="h-full" />
// //                   </div>
// //                   <div className="w-[65%] flex flex-col justify-center items-center mt-8">
// //                     <h3 className="font-maison text-[#000000] text-[19px] font-extralight">
// //                       {cartItem.name}
// //                     </h3>
// //                     <div className="flex justify-between items-start w-full mt-4">
// //                       <div className="w-[35%] flex justify-between items-center">
// //                         <CgMathMinus
// //                           className="cursor-pointer"
// //                           onClick={() => decreaseQuantity(cartItem.id)}
// //                           size={16}
// //                           color="#000"
// //                         />
// //                         <p className="font-maison text-gray-900 text-[16px]">
// //                           {cartItem.quantity}
// //                         </p>
// //                         <CgMathPlus
// //                           className="cursor-pointer"
// //                           onClick={() => increaseQuantity(cartItem.id)}
// //                           size={16}
// //                           color="#000"
// //                         />
// //                       </div>
// //                       <h1 className="font-recoleta text-primary text-right font-medium text-[20px]">
// //                         $ {cartItem.price} USD
// //                       </h1>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             );
// //           })}
// //         </div>
// //         <div className="w-[403px] border-t border-t-gray-400 ">
// //           <div className="flex justify-between items-center pt-4">
// //             <p className="font-maison font-light text-[15px]">Subtotal</p>
// //             <p className="font-maison font-medium text-[15px]">
// //               $ {itemPrices}
// //             </p>
// //           </div>
// //           <div className="flex justify-between items-center pt-4">
// //             <p className="font-maison font-light text-[15px]">Shipping fee</p>
// //             <p className="font-maison font-medium text-[15px]">$ 0.00</p>
// //           </div>
// //           <div className=" border-b border-b-gray-400 pb-4" />
// //           <div className="flex justify-between items-center pt-4">
// //             <p className="text-[24px] font-normal text-primary">Total</p>
// //             <p className="text-primary font-medium text-[24px]">
// //               $ {cartTotal}
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //       {/* {showPaymentModal && <Successful />} */}
// //     </div>
// //   );
// // };
// // export default CheckoutPage;

// import { Button } from "@/components/ui/button";
// import Input from "@/components/ui/input";
// import { CgMathMinus, CgMathPlus } from "react-icons/cg";
// import { Successful } from "@/shared/components/modals/successful";
// import { useCallback, useEffect, useState } from "react";
// import { LiaAngleRightSolid } from "react-icons/lia";
// import { useCart } from "@/context/cart";
// import BRHeader from "@/shared/components/header/header";
// import emptyCart from "@/assets/images/emptyCart.png";
// import { useAtom } from "jotai";
// import { userAtom } from "@/store/store";
// import { CreateOrderDto, UserData, addPayload } from "@/utils/types";
// import { loadStripe } from "@stripe/stripe-js";
// import {
//   Elements,
//   PaymentElement,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";
// import { useFormik } from "formik";
// import { CheckoutValidationSchemaw } from "@/schema/auth";
// import { useCountry, useStates } from "@/api/queries";
// import { Select } from "@/components/ui/select";
// import { useOrders, usePaymentInit } from "@/api/mutations";
// import { Link } from "react-router-dom";
// import { ChangeEvent, FormEvent } from "react";
// import * as Yup from "yup";
// const stripe_key = import.meta.env.VITE_STRIPE_KEY_TEST;
// interface FormValues {
//   email: string;
//   firstName: string;
//   lastName: string;
//   address: string;
//   country: string;
//   state: string;
//   zip: string;
//   apartment?: string;
//   phone: string;
// }
// export default function CheckoutPage() {
//   const [tab, setTab] = useState<number | null>(0);
//   const [user] = useAtom<UserData>(userAtom);
//   const { data } = useCountry();
//   const { mutate } = useOrders();
//   const payIn = usePaymentInit();
//   const stripePromise = loadStripe(stripe_key);

//   const [stripeOptions, setStripeOptions] = useState({
//     clientSecret: "",
//   });
//   const { cart, increaseQuantity, decreaseQuantity, calculateTotalPrice } =
//     useCart();
//   const cartTotal = calculateTotalPrice();
//   // const handleSubmit = (event: any) => {
//   //   event.preventDefault();
//   //   console.group(values, "values");
//   //     const payload: CreateOrderDto = {
//   //       customer: {
//   //         email: user.email,
//   //         phone: values.phone,
//   //         firstName: user.profile.firstName,
//   //         lastName: user.profile.lastName,
//   //       },
//   //       address: {
//   //         country: values.country,
//   //         state: values.state,
//   //         city: values.city,
//   //         zip: values.zip,
//   //         line1: values.address,
//   //         apartment: values.apartment,
//   //       },
//   //       products: cart.map((ele) => ({
//   //         productId: Number(ele.id),
//   //         quantity: ele.quantity,
//   //       })),
//   //     };

//   //     mutate(payload, {
//   //       onSuccess: (data) => {
//   //         console.log(data);
//   //         setStripeOptions({
//   //           clientSecret: data.data?.paymentIntent?.clientSecret,
//   //         });
//   //         setTab(1);
//   //         console.log(tab);
//   //       },
//   //       onError: (error) => {
//   //         console.log(error, "error");
//   //       },
//   //     });
//   //   const postData: addPayload = {
//   //     amount: 210,
//   //     currency: "usd",
//   //     paymentMethodTypes: ["card"],
//   //     description: "string",
//   //   };
//   //   payIn.mutate(postData, {
//   //     onSuccess: (data) => {
//   //       console.log(data);
//   //       setStripeOptions({
//   //         clientSecret: data?.data?.clientSecret,
//   //       });
//   //       console.log(tab);
//   //     },
//   //     onError: (error) => {
//   //       console.log(error, "error");
//   //     },
//   //   });
//   //   setTab(1);
//   // };

//   const [formValues, setFormValues] = useState<FormValues>({
//     email: "",
//     firstName: "",
//     lastName: "",
//     address: "",
//     country: "",
//     state: "",
//     zip: "",
//     apartment: "",
//     phone: "",
//   });

//   const [erors, setErors] = useState<{ [key: string]: string }>({});

//   const validateForm = async () => {
//     try {
//       await CheckoutValidationSchemaw.validate(formValues, {
//         abortEarly: false,
//       });
//       setErors({});
//       return true;
//     } catch (err) {
//       if (err instanceof Yup.ValidationError) {
//         const newErrors: { [key: string]: string } = {};
//         err.inner.forEach((error) => {
//           if (error.path) {
//             newErrors[error.path] = error.message;
//           }
//         });
//         setErors(newErrors);
//       }
//       return false;
//     }
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // const isValid = await validateForm();
//     // console.log(isValid);

//     // if (isValid) {
//     console.log("Form submitted:", formValues);
//     const payload: CreateOrderDto = {
//       customer: {
//         email: user.email,
//         phone: values.phone,
//         firstName: user.profile.firstName,
//         lastName: user.profile.lastName,
//       },
//       address: {
//         country: values.country,
//         state: values.state,
//         city: values.city,
//         zip: values.zip,
//         line1: values.address,
//         apartment: values.apartment,
//       },
//       products: cart.map((ele) => ({
//         productId: Number(ele.id),
//         quantity: ele.quantity,
//       })),
//     };

//     mutate(payload, {
//       onSuccess: (data) => {
//         console.log(data);
//         setStripeOptions({
//           clientSecret: data.data?.paymentIntent?.clientSecret,
//         });
//         setTab(1);
//         console.log(tab);
//       },
//       onError: (error) => {
//         console.log(error, "error");
//       },
//     });
//     const postData: addPayload = {
//       amount: 210,
//       currency: "usd",
//       paymentMethodTypes: ["card"],
//       description: "string",
//     };
//     payIn.mutate(postData, {
//       onSuccess: (data) => {
//         console.log(data);
//         setStripeOptions({
//           clientSecret: data?.data?.clientSecret,
//         });
//         console.log(tab);
//       },
//       onError: (error) => {
//         console.log(error, "error");
//       },
//     });
//     setTab(1);
//     // }
//     console.log("loafing");
//   };

//   const { handleBlur, handleChange, errors, touched, values } = useFormik({
//     initialValues: {
//       address: "",
//       country: "",
//       state: "",
//       zip: "",
//       apartment: "",
//       city: "",
//       phone: "",
//     },
//     validationSchema: CheckoutValidationSchemaw,

//     onSubmit: (values) => {
//       console.log("Form submitted:", values);

//       console.group(values, "values");
//       const payload: CreateOrderDto = {
//         customer: {
//           email: user.email,
//           phone: values.phone,
//           firstName: user.profile.firstName,
//           lastName: user.profile.lastName,
//         },
//         address: {
//           country: values.country,
//           state: values.state,
//           city: values.city,
//           zip: values.zip,
//           line1: values.address,
//           apartment: values.apartment,
//         },
//         products: cart.map((ele) => ({
//           productId: Number(ele.id),
//           quantity: ele.quantity,
//         })),
//       };

//       mutate(payload, {
//         onSuccess: (data) => {
//           console.log(data);
//           setStripeOptions({
//             clientSecret: data.data?.paymentIntent?.clientSecret,
//           });
//           setTab(1);
//           console.log(tab);
//         },
//         onError: (error) => {
//           console.log(error, "error");
//         },
//       });
//     },
//   });
//   const { refetch, data: states } = useStates(values.country);
//   useEffect(() => {
//     if (values.country) {
//       refetch();
//     }
//   }, [values.country]);

//   if (cart.length <= 0) {
//     return (
//       <>
//         {" "}
//         <div className="flex flex-col justify-center mt-40 items-center">
//           <img src={emptyCart} alt="empty Cart" />
//           <p className="font-amsterdam text-2xl">Cart is empty</p>
//         </div>
//         <Link to="/store" className="flex justify-center">
//           <button className="bg-[#946C3C] w-full max-w-[300px] mx-auto uppercase text-white   py-4  mt-[63px] ">
//             go to shop
//           </button>
//         </Link>
//       </>
//     );
//   }

//   return (
//     <>
//       <BRHeader />
//       <div className="w-full mt-20 min-h-[100vh] flex pb-12 justify-between items-stretch ">
//         <div className="w-[50%] bg-[#E6E5DE] pt-16 pb-12 px-24">
//           <div className="flex">
//             {["Information", "Payment"].map((ele, index) =>
//               index === 0 ? (
//                 <div className="flex items-center gap-[.5rem]" key={index}>
//                   <p
//                     className="font-arapey text-[15px] font-light text-[#000000] cursor-pointer"
//                     // onClick={() => handleActiveTab(id)}
//                   >
//                     {ele}
//                   </p>
//                   <div className="font-bold font-arapey text-[19px]">
//                     <LiaAngleRightSolid />
//                   </div>
//                 </div>
//               ) : (
//                 <p
//                   className="text-[15px] ml-2 font-light text-[#000000] cursor-pointer"
//                   // onClick={() => handleActiveTab(id)}
//                 >
//                   {ele}
//                 </p>
//               )
//             )}
//           </div>

//           {tab === 1 ? (
//             <>
//               <p className="pt-6 font-light text-[14px] font-maison">
//                 SHIPPING INFORMATION
//               </p>
//               <form className="pt-6" onSubmit={handleSubmit}>
//                 <Input
//                   className="bg-transparent"
//                   label="Email address"
//                   value={formValues.email}
//                   onChange={handleChange}
//                   // disabled
//                   placeholder="Your email address"
//                   onBlur={handleBlur}
//                 />

//                 <div className="flex gap-[1rem]">
//                   <Input
//                     className="bg-transparent"
//                     label="First name"
//                     onChange={handleChange}
//                     // disabled
//                     value={formValues.firstName}
//                     placeholder="Your first name"
//                   />
//                   <Input
//                     className="bg-transparent"
//                     label="Last name"
//                     onChange={handleChange}
//                     // disabled
//                     value={formValues.lastName}
//                     placeholder="Your last name"
//                   />
//                 </div>
//                 <Input
//                   className="bg-transparent"
//                   label="Address"
//                   name="address"
//                   onChange={handleChange}
//                   error={errors.address}
//                   hasError={!!errors.address && touched.address}
//                   onBlur={handleBlur}
//                   placeholder="Your address"
//                   value={formValues.address}
//                 />
//                 <Input
//                   className="bg-transparent"
//                   label="Apartment, suite, etc. (optional)"
//                   placeholder="Your apartment"
//                   name="apartment"
//                   onChange={handleChange}
//                   error={errors.apartment}
//                   hasError={!!errors.apartment && touched.apartment}
//                   onBlur={handleBlur}
//                   value={formValues.apartment}
//                 />
//                 <Select
//                   className="bg-transparent"
//                   label="Country"
//                   name="country"
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   // value={formValues.country}
//                   options={
//                     Array.isArray(data?.data)
//                       ? data.data.map((ele: any) => ({
//                           label: ele.name,
//                           value: ele.code,
//                         }))
//                       : []
//                   }
//                 />
//                 <div className="flex gap-[1rem]">
//                   <Select
//                     className="bg-transparent"
//                     label="State"
//                     name="state"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     options={
//                       Array.isArray(states?.data)
//                         ? states.data.map((ele: any) => ({
//                             label: ele.name,
//                             value: ele.code,
//                           }))
//                         : []
//                     }
//                   />
//                   <Input
//                     className="bg-transparent"
//                     label="City"
//                     placeholder="Your city"
//                     name="city"
//                     onChange={handleChange}
//                     error={errors.city}
//                     hasError={!!errors.city && touched.city}
//                     onBlur={handleBlur}
//                   />

//                   <Input
//                     className="bg-transparent"
//                     label="Zip code"
//                     placeholder="Your zip code"
//                     name="zip"
//                     onChange={handleChange}
//                     error={errors.zip}
//                     hasError={!!errors.zip && touched.zip}
//                     onBlur={handleBlur}
//                   />
//                 </div>
//                 <Input
//                   className="bg-transparent"
//                   label="Phone"
//                   placeholder="+1 000 – 0000 – 000"
//                   name="phone"
//                   onChange={handleChange}
//                   error={errors.phone}
//                   hasError={!!errors.phone && touched.phone}
//                   onBlur={handleBlur}
//                 />

//                 <Button
//                   // isLoading={isPending}
//                   // onClick={() => handleSubmit(e)}
//                   className="w-full mt-2 h-[56px] p-6"
//                   type="submit"
//                 >
//                   {payIn.isPending ? "LOADING" : "CONTINUE TO PAYMENT"}
//                 </Button>
//               </form>
//             </>
//           ) : (
//             <>
//               <p className="pt-6 font-light text-[14px] font-maison">PAYMENT</p>
//               <div className="pt-8">
//                 {stripeOptions.clientSecret && (
//                   <Elements stripe={stripePromise} options={stripeOptions}>
//                     <StripeWrapper />
//                   </Elements>
//                 )}

//                 {/* this is to make the page get to the bottom else it would jump */}
//                 <p className="w-full mt-2 h-[56px] p-6 opacity-0">PAY</p>
//                 <p className="w-full mt-2 h-[56px] p-6 opacity-0">NOW</p>
//               </div>
//             </>
//           )}
//         </div>
//         <div className="w-[50%] bg-white pb-12 pt-12 px-24">
//           <div className="pt-20">
//             {cart?.map((cartItem) => {
//               return (
//                 <div key={cartItem.id} className="w-full">
//                   <div className=" w-[410px] h-[180px] border-b border-gray-200 gap-[.8rem] flex justify-start items-center">
//                     <div className="w-[147px] h-[138px]">
//                       <img src={cartItem.images[0]} alt="" className="h-full" />
//                     </div>
//                     <div className="w-[65%] flex flex-col justify-center items-center mt-8">
//                       <h3 className="font-maison text-[#000000] text-[19px] font-extralight">
//                         {cartItem.name}
//                       </h3>
//                       <div className="flex justify-between items-start w-full mt-4">
//                         <div className="w-[35%] flex justify-between items-center">
//                           <CgMathMinus
//                             className="cursor-pointer"
//                             onClick={() => decreaseQuantity(cartItem.id)}
//                             size={16}
//                             color="#000"
//                           />
//                           <p className="font-maison text-gray-900 text-[16px]">
//                             {cartItem.quantity}
//                           </p>
//                           <CgMathPlus
//                             className="cursor-pointer"
//                             onClick={() => increaseQuantity(cartItem.id)}
//                             size={16}
//                             color="#000"
//                           />
//                         </div>
//                         <h1 className="font-recoleta text-primary text-right font-medium text-[20px]">
//                           {new Intl.NumberFormat("en-US", {
//                             style: "currency",
//                             currency: "USD",
//                             minimumFractionDigits: 0,
//                             maximumFractionDigits: 0,
//                           }).format(cartItem?.price)}{" "}
//                         </h1>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//           <div className="w-[410px] border-t border-t-gray-400 ">
//             <div className="flex justify-between items-center pt-4">
//               <p className="font-arapey font-light text-[15px]">Subtotal</p>
//               <p className="font-arapey font-medium text-[15px]">$ 0.00</p>
//             </div>
//             <div className="flex justify-between items-center pt-4">
//               <p className="font-arapey font-light text-[15px]">Shipping fee</p>
//               <p className="font-arapey font-medium text-[15px]">$ 0.00</p>
//             </div>
//             <div className=" border-b border-b-gray-400 pb-4" />
//             <div className="flex justify-between items-center pt-4">
//               <p className="text-[24px] font-normal text-primary">Total</p>
//               <p className="text-primary font-medium text-[24px]">
//                 {new Intl.NumberFormat("en-US", {
//                   style: "currency",
//                   currency: "USD",
//                   minimumFractionDigits: 0,
//                   maximumFractionDigits: 0,
//                 }).format(cartTotal)}{" "}
//               </p>
//               {/* <p className="text-primary font-medium font-arapey text-[24px]">
//                 {formatter.format(
//                   products.length
//                     ? products
//                         .map((ele) => Number(ele?.price) * ele.count)
//                         ?.reduce((a, b) => a + b)
//                     : 0
//                 )}{" "}
//               </p> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// const StripeWrapper = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [loading, setLoading] = useState(false);
//   const [showPaymentModal, setShowPaymentModal] = useState<boolean>(false);

//   const confirmPayment = useCallback(async () => {
//     setLoading(true);
//     if (!stripe || !elements) {
//       // setLoading(false);
//       return;
//     }

//     const result = await stripe.confirmPayment({
//       elements,
//       redirect: "if_required",
//       // confirmParams: {
//       //   return_url: window.location.href,
//       // },
//     });

//     console.log(result, "result");
//     if (result.error) {
//       console.log(result.error.message);
//     } else if (result.paymentIntent.status === "succeeded") {
//       setShowPaymentModal(true);
//     }
//     setLoading(false);
//   }, []);
//   return (
//     <>
//       <PaymentElement />
//       <Button
//         isLoading={loading}
//         onClick={() => confirmPayment()}
//         className="w-full mt-2 h-[56px] p-6"
//       >
//         PAY NOW
//       </Button>
//       {showPaymentModal && <Successful />}
//     </>
//   );
// };
import BRHeader from "@/shared/components/header/header";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import { Successful } from "@/shared/components/modals/successful";
import { useCallback, useEffect, useState } from "react";
import { LiaAngleRightSolid } from "react-icons/lia";
import { useCart } from "@/context/cart";
// import { formatter } from "@/lib/utils";
import emptyCart from "@/assets/images/emptyCart.png";
import { useAtom } from "jotai";
import { userAtom } from "@/store/store";
import { CreateOrderDto, UserData, addPayload } from "@/utils/types";
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
import { useOrders, usePaymentInit } from "@/api/mutations";
import { Link } from "react-router-dom";

const stripe_key = import.meta.env.VITE_STRIPE_KEY_TEST;

export default function CheckoutPage() {
  const [tab, setTab] = useState<number | null>(0);
  const [user] = useAtom<UserData>(userAtom);
  const { data } = useCountry();
  const { mutate, isPending } = useOrders();
  const payIn = usePaymentInit();
  const stripePromise = loadStripe(stripe_key);
  const [stripeOptions, setStripeOptions] = useState({
    clientSecret: "",
  });
  const { cart, increaseQuantity, decreaseQuantity, calculateTotalPrice } =
    useCart();
  const cartTotal = calculateTotalPrice();
  const { handleBlur, handleChange, handleSubmit, errors, touched, values } =
    useFormik({
      initialValues: {
        email: "",
        firstName: "",
        lastName: "",
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
        console.log(values, "values");
        const postData: addPayload = {
          amount: 210,
          currency: "usd",
          paymentMethodTypes: ["card"],
          description: "string",
        };
        const payload: CreateOrderDto = {
          customer: {
            email: values.email,
            phone: values.phone,
            firstName: values.firstName,
            lastName: values.lastName,
          },
          address: {
            country: values.country,
            state: values.state,
            city: values.city,
            zip: values.zip,
            line1: values.address,
            apartment: values.apartment,
          },
          products: cart.map((ele) => ({
            productId: Number(ele.id),
            quantity: ele.quantity,
          })),
        };
        mutate(payload, {
          onSuccess: (data) => {
            console.log(data);
            console.log("success");

            setStripeOptions({
              clientSecret: data.data?.paymentIntent?.clientSecret,
            });

            setTab(1);
          },

          onError: (error) => {
            console.log(error, "error");
          },
        });
        payIn.mutate(postData, {
          onSuccess: (data) => {
            console.log("Payment Intent created:", data);
            console.log("success");
            setStripeOptions({
              ...data,
              mode: "payment",
              amount: 210,
              currency: "usd",
            });
            if (data?.data.clientSecret) {
              setStripeOptions({ clientSecret: data.data.clientSecret });
              console.log(stripeOptions);
            } else {
              console.log("stripeOptions ids not found");
            }
            console.log(stripeOptions);
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

  if (cart.length <= 0) {
    return (
      <>
        {" "}
        <div className="flex flex-col justify-center mt-40 items-center">
          <img src={emptyCart} alt="empty Cart" />
          <p className="font-amsterdam text-2xl">Cart is empty</p>
        </div>
        <Link to="/store" className="flex justify-center">
          <button className="bg-[#946C3C] w-full max-w-[300px] mx-auto uppercase text-white   py-4  mt-[63px] ">
            go to shop
          </button>
        </Link>
      </>
    );
  }

  return (
    <>
      <BRHeader />
      <div className="w-full min-h-[100vh] mt-14 flex pb-12 justify-between items-stretch ">
        <div className="w-[50%] bg-[#E6E5DE] pt-16 pb-12 px-24">
          <h4 className="font-recoleta text-[#000000] font-normal text-[24px]">
            Checkout
          </h4>
          <div className="flex">
            {["Information", "Payment"].map((ele, id) =>
              id === 0 ? (
                <div className="flex items-center gap-[.5rem]" key={id}>
                  <p
                    className="font-arapey text-[15px] font-light text-[#000000] cursor-pointer"
                    // onClick={() => handleActiveTab(id)}
                  >
                    {ele}
                  </p>
                  <div className="font-bold font-arapey text-[19px]">
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
              <p className="pt-6 font-light text-[14px] ">
                SHIPPING INFORMATION
              </p>
              <div className="pt-6">
                {/* <Input
                  className="bg-transparent"
                  label="Email address"
                  value={values.email}
                  // disabled
                  error={errors.email}
                  hasError={!!errors.email && touched.email}
                  onBlur={handleBlur}
                  placeholder="Your email address"
                />
                <div className="flex gap-[1rem]">
                  <Input
                    className="bg-transparent"
                    label="First name"
                    // disabled
                    error={errors.firstName}
                    hasError={!!errors.firstName && touched.firstName}
                    onBlur={handleBlur}
                    value={values.firstName}
                    placeholder="Your first name"
                  />
                  <Input
                    className="bg-transparent"
                    label="Last name"
                    // disabled
                    error={errors.lastName}
                    hasError={!!errors.lastName && touched.lastName}
                    onBlur={handleBlur}
                    value={values.lastName}
                    placeholder="Your last name"
                  />
                </div> */}
                <Input
                  className="bg-transparent"
                  label="Email address"
                  value={user.email}
                  error={errors.email}
                  hasError={!!errors.email && touched.email}
                  onBlur={handleBlur}
                  type="email"
                  placeholder="Your email address"
                  required
                />
                <div className="flex gap-[1rem]">
                  <Input
                    className="bg-transparent"
                    label="First name"
                    // disabled
                    value={user?.profile?.firstName}
                    placeholder="Your first name"
                  />
                  <Input
                    className="bg-transparent"
                    label="Last name"
                    // disabled
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
                  type="submit"
                >
                  CONTINUE TO PAYMENT
                </Button>
              </div>
            </>
          ) : (
            <>
              <p className="pt-6 font-light text-[14px] ">PAYMENT</p>
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
            {cart?.map((cartItem) => {
              return (
                <div key={cartItem.id} className="w-full">
                  <div className=" w-[410px] h-[180px] border-b border-gray-200 gap-[.8rem] flex justify-start items-center">
                    <div className="w-[147px] h-[138px]">
                      <img src={cartItem.images[0]} alt="" className="h-full" />
                    </div>
                    <div className="w-[65%] flex flex-col justify-center items-center mt-8">
                      <h3 className=" text-[#000000] text-[19px] font-extralight">
                        {cartItem.name}
                      </h3>
                      <div className="flex justify-between items-start w-full mt-4">
                        <div className="w-[35%] flex justify-between items-center">
                          <CgMathMinus
                            className="cursor-pointer"
                            onClick={() => decreaseQuantity(cartItem.id)}
                            size={16}
                            color="#000"
                          />
                          <p className=" text-gray-900 text-[16px]">
                            {cartItem.quantity}
                          </p>
                          <CgMathPlus
                            className="cursor-pointer"
                            onClick={() => increaseQuantity(cartItem.id)}
                            size={16}
                            color="#000"
                          />
                        </div>
                        <h1 className="font-recoleta text-primary text-right font-medium text-[20px]">
                          {new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          }).format(cartItem?.price)}{" "}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" border-t border-t-gray-400 w-[85%]">
            <div className="flex justify-between items-center pt-4">
              <p className="font-arapey font-light text-[15px]">Subtotal</p>
              <p className="font-arapey font-medium text-[15px]">$ 0.00</p>
            </div>
            <div className="flex justify-between items-center pt-4">
              <p className="font-arapey font-light text-[15px]">Shipping fee</p>
              <p className="font-arapey font-medium text-[15px]">$ 0.00</p>
            </div>
            <div className=" border-b border-b-gray-400 pb-4" />
            <div className="flex justify-between items-center pt-4">
              <p className="text-[24px] font-normal font-arapey text-primary">
                Total
              </p>
              <p className="text-primary font-medium font-arapey text-[24px]">
                <p className="text-primary font-medium text-[24px]">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }).format(cartTotal)}{" "}
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const StripeWrapper = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState<boolean>(false);
  const payIn = usePaymentInit();

  useEffect(() => {
    const postData: addPayload = {
      amount: 210,
      currency: "usd",
      paymentMethodTypes: ["card"],
      description: "string",
    };
    payIn.mutate(postData, {
      onSuccess: (data) => {
        console.log(data);
        setClientSecret(data?.data?.clientSecret);
        console.log(clientSecret);
      },
      onError: (error) => {
        console.log(error, "error");
      },
    });
  }, []);

  const confirmPayment = useCallback(async () => {
    setLoading(true);
    if (!stripe || !elements) {
      // setLoading(false);
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
      confirmParams: {
        return_url: window.location.href,
      },
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
