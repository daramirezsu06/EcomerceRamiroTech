import { LoginProps } from "@/app/types";
const URL = process.env.NEXT_PUBLIC_API_URL;


export const LoginPost = async (values: LoginProps) => {
  try {
    const response = await fetch(`${URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
      body: JSON.stringify(values),
    });
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Login failed");
      }
  } catch (error: any) {
      throw new Error(error);
  }
};
