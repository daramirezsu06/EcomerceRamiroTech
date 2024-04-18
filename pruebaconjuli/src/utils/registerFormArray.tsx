import { RiLockLine, RiMailLine, RiMapPinLine, RiPhoneLine, RiUserLine } from "@remixicon/react";
export const registerFormArray = [
    {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "Email",
        required: true,
        icon: <RiMailLine/>
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Password",
    required: true,
    icon:<RiLockLine/>

  },
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Name",
    required: true,
    icon:<RiUserLine/>
  },
  {
    name: "address",
    label: "Address",
    type: "text",
    placeholder: "Address",
    required: true,
    icon:<RiMapPinLine/>
  },
  {
    name: "phone",
    label: "Phone",
    type: "text",
    placeholder: "Phone",
    required: true,
    icon:<RiPhoneLine/>
  },
];