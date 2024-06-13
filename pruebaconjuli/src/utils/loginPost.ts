import { LoginProps } from "@/app/types";
const URL = process.env.NEXT_PUBLIC_API_URL;
import axios from "axios";
export const LoginPost = async (values: LoginProps) => {
  try {
    const response = await axios.post(`${URL}/auth/signin`, values);
    console.log(response);

    return response.data;
  } catch (error: any) {
    console.log(error);
  }
};

// export const LoginPost = async (values: LoginProps) => {
//   try {
//     const response = await fetch(`${URL}/auth/signin`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "ngrok-skip-browser-warning": "true",
//       },
//       body: JSON.stringify(values),
//     });
//     return response.json();
//   } catch (error: any) {
//     console.log(error);
//   }
// };
