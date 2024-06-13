import { RegisterProps, LoginProps } from "@/app/types";
import axios from "axios";
import { log } from "console";

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
  const infoTosend = { ...userData, phone: Number(userData.phone) };
  try {
    const response = await axios.post(`${API_URL}/auth/signup`, infoTosend);
    console.log(response);
  } catch (error: any) {
    console.log("form data", userData);
    console.log(error);
  }
}

// async function register(userData: RegisterProps) {
//   try {
//     const response = await fetch(`${API_URL}/auth/signup`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "ngrok-skip-browser-warning": "true",
//       },
//       body: JSON.stringify(userData),
//     });
//     console.log(response);

//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error("Registration failed");
//     }
//   } catch (error: any) {
//     console.log(error);

//   }
// }

export { login, register };
