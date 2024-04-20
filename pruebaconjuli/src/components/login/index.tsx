"use client";
import { LoginFormArray } from "@/utils/loginForm";
import { useEffect, useState } from "react";
import { validateLoginForm } from "@/utils/formValidations";
import { LoginErrorProps } from "@/app/types";

interface LoginForm {
  email: string;
  password: string;
}
const Login = () => {
  const [LoginForm, setLoginForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const [LoginError, setLoginError] = useState<LoginErrorProps>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({
      ...LoginForm,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    const errors = validateLoginForm(LoginForm);
    setLoginError(errors);
  }, [LoginForm]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(LoginForm);
  };

  return (
    <>
      <form className="md:w-1/3 m-auto md:my-20 ">
        <h1 className="text-3xl text-center">Register</h1>
        {LoginFormArray.map(
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
                  value={LoginForm[name as keyof LoginForm]}
                />
                <p className="text-red-500">
                  {LoginError[name as keyof LoginErrorProps]}
                </p>
              </div>
            );
          }
        )}
        <button
          className="bg-red-500 text-white p-2 rounded-lg my-4"
          type="submit"
          onClick={handleSubmit}>
          Login
        </button>
      </form>
    </>
  );
};
export default Login;
