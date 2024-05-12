import { useState } from "react";
import useFetch from "@/hooks/useFetch";
import { URL } from "@/api/axios";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const Payment: React.FC = () => {
  const postData = {
    amount: 210,
    currency: "usd",
    paymentMethodTypes: ["card"],
    description: "string",
  };

  const { data } = useFetch(`${URL}/payments/init`, "POST", postData);

  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!elements || !stripe) {
      // Handle the case where elements or stripe is null
      console.error("Stripe elements or stripe object is not available.");
      return;
    }

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      // Show error to your customer
      setErrorMessage(submitError.message);
      return;
    }

    // Create the PaymentIntent and obtain clientSecret from your server endpoint

    const clientSecret = await data?.data?.clientSecret;
    console.log(clientSecret);
    if (!clientSecret) {
      console.error("Client secret is missing or invalid.");
      return;
    }

    const { error } = await stripe.confirmPayment({
      // elements,
      clientSecret,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
      },
    });

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setErrorMessage(error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button
        className="bg-red-300 w-full"
        type="submit"
        disabled={!stripe || !elements}
      >
        Pay
      </button>
      {/* Show error message to your customers */}
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

export default Payment;
