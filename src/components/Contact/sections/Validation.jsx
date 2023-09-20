import * as yup from "yup";


export const initialValues = {
  name: "",
  email: "",
  massage: "",
};

export const validationSchema = yup.object({
  name: yup
    .string()
    .min(3, "Mininum 2 characters")
    .max(15, "Maximum 15 characters")
    .required("Username required!"),
  email: yup
    .string()
    .email("Invalid email, please enter a valid email.")
    .required("Email required!"),
  message: yup
    .string()
    .min(15, "Your message must contain at least 15 characters.")
    .required("message required!"),
});
