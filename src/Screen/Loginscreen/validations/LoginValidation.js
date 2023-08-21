import * as yup from "yup";

export const userSchema = yup.object().shape({
  email: yup.string().email("Invalid email address format").required(),
  password: yup
    .string()
    .min(4, "Password must be 4 characters at minimum")
    .max(10, "Password can be atmost 10 characters long")
    .required("Password is required"),
});
