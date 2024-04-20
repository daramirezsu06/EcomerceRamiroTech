import { RegisterProps, LoginProps } from "@/app/types";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
async function login(userData: LoginProps) {
  try {
    const response = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
      body: JSON.stringify(userData),
    });
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Login failed");
    }
  } catch (error: any) {
    throw new Error(error);
  }
}

async function register(userData: RegisterProps) {
  try {
    const response = await fetch(`${API_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
      body: JSON.stringify(userData),
    });
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Registration failed");
    }
  } catch (error: any) {
    throw new Error(error);
  }
}

export { login, register };
