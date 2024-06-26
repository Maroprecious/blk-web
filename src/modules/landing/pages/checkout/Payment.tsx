// import { useState } from "react";
// import useFetch from "@/hooks/useFetch";
// import { URL } from "@/api/axios";
// import {
//   PaymentElement,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";

// const Payment: React.FC = () => {
//   const postData = {
//     amount: 210,
//     currency: "usd",
//     paymentMethodTypes: ["card"],
//     description: "string",
//   };

//   const { data } = useFetch(`${URL}/payments/init`, "POST", postData);

//   const stripe = useStripe();
//   const elements = useElements();

//   const [errorMessage, setErrorMessage] = useState(null);

//   const handleSubmit = async (event: any) => {
//     event.preventDefault();

//     if (!elements || !stripe) {
//       // Handle the case where elements or stripe is null
//       console.error("Stripe elements or stripe object is not available.");
//       return;
//     }

//     // Trigger form validation and wallet collection
//     const { error: submitError } = await elements.submit();
//     if (submitError) {
//       // Show error to your customer
//       setErrorMessage(submitError.message);
//       return;
//     }

//     // Create the PaymentIntent and obtain clientSecret from your server endpoint

//     const clientSecret = await data?.data?.clientSecret;
//     console.log(clientSecret);
//     if (!clientSecret) {
//       console.error("Client secret is missing or invalid.");
//       return;
//     }

//     const { error } = await stripe.confirmPayment({
//       // elements,
//       clientSecret,
//       confirmParams: {
//         return_url: "https://example.com/order/123/complete",
//       },
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <PaymentElement />
//       <button
//         className="bg-red-300 w-full"
//         type="submit"
//         disabled={!stripe || !elements}
//       >
//         Pay
//       </button>
//       {/* Show error message to your customers */}
//       {errorMessage && <div>{errorMessage}</div>}
//     </form>
//   );
// };

// export default Payment;

// src/components/PaymentForm.tsx
import React from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";

const PaymentForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const history = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement!,
    });

    if (error) {
      console.error(error);
      history("/error");
    } else {
      console.log("PaymentMethod:", paymentMethod);

      const sendPaymentMethodToServer = async (paymentMethodId: string) => {
        try {
          const response = await fetch(
            "https://backrooted-backend.vercel.app/payments/init",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ paymentMethodId }),
            }
          );

          if (!response.ok) {
            throw new Error("Failed to send payment method to server");
          }

          console.log("Payment method sent successfully to server");
        } catch (error) {
          console.error("Error sending payment method to server:", error);
        }
      };

      sendPaymentMethodToServer(paymentMethod.id);

      history("/success");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 border border-gray-300 rounded-lg bg-white shadow-md"
    >
      <div className="mb-4">
        <CardElement className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <button
        type="submit"
        disabled={!stripe}
        className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Pay Now
      </button>
    </form>
  );
};

export default PaymentForm;
