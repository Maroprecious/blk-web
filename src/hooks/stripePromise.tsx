// stripe.ts
import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(
  "pk_test_51PEFql2NydvrzulHwrfQwduqUnez8Vl94xWL1H61S3vBuODSmYEU3C2FEtb2SBxa3og5Ejk42q4hOLennfe9NB8G006yVhwYVu"
);
