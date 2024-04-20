import {
  LoginProps,
  LoginErrorProps,
  RegisterProps,
  RegisterErrorProps,
} from "@/app/types";

export function validateLoginForm(values: LoginProps): LoginErrorProps {
  let errors: LoginErrorProps = {};
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid";
  } else if (!values.password) {
    errors.password = "Password is required";
  }
  return errors;
}

export function validateRegisterForm(
  values: RegisterProps
): RegisterErrorProps {
  let errors: RegisterErrorProps = {};
  if (!values.name) {
    errors.name = "Name is required";
  } else if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid";
  } else if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be more than 6 characters";
  } else if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm Password is required";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  } else if (!values.address) {
    errors.address = "Address is required";
  } else if (!values.phone) {
    errors.phone = "Phone is required";
  } else if (values.phone.length < 10) {
    errors.phone = "Phone needs to be more than 10 characters";
  }
  return errors;
}
