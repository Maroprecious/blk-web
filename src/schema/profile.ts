import * as Yup from "yup";

export const createProfileValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  dob: Yup.string().required("Birthday is required"),
  continent: Yup.string().required("Location is required"),
  photoUrl: Yup.string().optional(),
});

export const editProfileValidationSchema = Yup.object().shape({
  firstName: Yup.string().optional(),
  lastName: Yup.string().optional(),
  email: Yup.string().email().optional(),
  continent: Yup.string().optional(),
});

export const retreatEnquiryValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email().required("Email is required"),
  message: Yup.string().required("Message is required"),
});
export const bookRetreatValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email().required("Email is required"),
  paymentType: Yup.string().required("Payment type is required"),
  amount:  Yup.string().required("Amount is required"),

});
