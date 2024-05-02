import * as Yup from "yup";

export const signInValidationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const signUpValidationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .test("specialChars", "Field must contain special characters", (value) => {
      const regex = /[~!@#$%^&*)(_+\-:[}=]/;
      return regex.test(value || "");
    })
    .test("specialChars", "Field must contain at least one number", (value) => {
      const regex = /\d/;
      return regex.test(value || "");
    })
    .test(
      "specialChars",
      "Field must contain at least an uppercase",
      (value) => {
        const regex = /[A-Z]/;
        return regex.test(value || "");
      }
    )
    .min(8),
  password_confirmation: Yup.string()
    .required("Confirm Password is required")
    .test("passwords-match", "Passwords must match", function (value) {
      return this.parent.password === value;
    }),
});

export const forgotPasswordValidationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
});

export const resetPasswordValidationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required"),
  token: Yup.string().required("Token is required"),
});

export const updatePasswordValidationSchema = Yup.object().shape({
  oldPassword: Yup.string().required(" Old password is required"),
  newPassword: Yup.string().required("New password is required"),
});

export const CheckoutValidationSchema = Yup.object().shape({
  address: Yup.string().required(),
  country: Yup.string().required(),
  state: Yup.string().required(),
  zip: Yup.string().required(),
  apartment: Yup.string().required(),
  phone: Yup.string().required(),
});
export const addShippingValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email().required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  address: Yup.string().required("Address is required"),
  suit: Yup.string().required("suite is required"),
  city: Yup.string().required("city is required"),
  state: Yup.string().required("state is required"),
  zip: Yup.string().required("zip code is required"),
});


