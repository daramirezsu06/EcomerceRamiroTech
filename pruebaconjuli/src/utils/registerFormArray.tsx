import {
  RiLockLine,
  RiMailLine,
  RiMapPinLine,
  RiPhoneLine,
  RiUserLine,
} from "@remixicon/react";
export interface IRegisterForm {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
  icon: JSX.Element;
}

export const registerFormArray: IRegisterForm[] = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Name",
    required: true,
    icon: <RiUserLine />,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Email",
    required: true,
    icon: <RiMailLine />,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Password",
    required: true,
    icon: <RiLockLine />,
  },
  {
    name: "confirmPassword",
    label: "confirmPassword",
    type: "password",
    placeholder: "Password",
    required: true,
    icon: <RiLockLine />,
  },
  {
    name: "address",
    label: "Address",
    type: "text",
    placeholder: "Address",
    required: true,
    icon: <RiMapPinLine />,
  },
  {
    name: "phone",
    label: "Phone",
    type: "text",
    placeholder: "Phone",
    required: true,
    icon: <RiPhoneLine />,
  },
];
