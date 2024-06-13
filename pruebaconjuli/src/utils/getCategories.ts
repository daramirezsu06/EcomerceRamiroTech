import axios from "axios";

const URL = process.env.NEXT_PUBLIC_API_URL;

export const getCategories = async () => {
  try {
    const response = await axios.get(`${URL}/categories`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
