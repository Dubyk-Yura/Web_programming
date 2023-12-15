import * as yup from "yup";

const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
const NameRegex = /^[a-zA-Z]+$/;
const SurnameRegex = /^[a-zA-Z]+$/;
const EmailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const checkoutSchema = yup.object().shape({
  Name: yup
    .string()
    .matches(NameRegex, {
      message: "Name shouldn't contain any special characters!",
    })
    .required("Field is required!"),
  Surname: yup
    .string()
    .matches(SurnameRegex, {
      message: "Surname shouldn't contain any special characters!",
    })
    .required("Field is required!"),
  email: yup
    .string()
    .matches(EmailRegex,"Please, enter a valid email!")
    .required("Field is required!"),
  phone: yup
    .string()
    .matches(phoneRegex, { message: "Please, enter a valid phone number!" })
    .required("Field is required!"),
  address: yup.string().required("Field is required!"),
});
