"use client";
import { IRegisterForm, registerFormArray } from "@/utils/registerFormArray";
import { useEffect, useState } from "react";
import { RegisterErrorProps } from "@/app/types";
import { validateRegisterForm } from "@/utils/formValidations";
import { useRouter } from "next/navigation";
import { register } from "@/utils/registerpost";

interface RegisterForm {
  email: string;
  password: string;
  name: string;
  address: string;
  phone: string;
  confirmPassword: string;
  country: string;
  city: string;
}

const Register: React.FC = (): React.ReactElement => {
  const router = useRouter();
  const [registerForm, setRegisterForm] = useState<RegisterForm>({
    email: "",
    password: "",
    name: "",
    address: "",
    phone: "",
    confirmPassword: "",
    country: "Colombia",
    city: "Medellin",
  });

  const [registerError, setRegisterError] = useState<RegisterErrorProps>({
    email: "",
    password: "",
    name: "",
    address: "",
    phone: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const errors = validateRegisterForm(registerForm);
    setRegisterError(errors);
  }, [registerForm]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value,
    });
    console.log(registerForm);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const response = await register(registerForm);
    router.push("/Login");
  };

  return (
    <>
      <form className="md:w-1/3 m-auto md:my-20 ">
        <h1 className="text-3xl text-center">Register</h1>
        {registerFormArray.map(
          ({ name, label, type, placeholder, required, icon }) => {
            return (
              <div key={name} className="flex flex-col ">
                <label className="flex gap-4 px-2" htmlFor={name}>
                  {icon}
                  {label}
                </label>
                <input
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  required={required}
                  className="border-2 mx-1/3 py-2 rounded-md"
                  onChange={handleChange}
                  value={registerForm[name as keyof RegisterForm]}
                />
                <p className="text-red-500">
                  {registerError[name as keyof RegisterErrorProps]}
                </p>
              </div>
            );
          }
        )}
        <button
          className="bg-red-500 text-white p-2 rounded-lg my-4"
          type="submit"
          onClick={handleSubmit}>
          Register
        </button>
      </form>
    </>
  );
};

export default Register;
