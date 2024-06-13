import axios from "axios";

const URL = process.env.NEXT_PUBLIC_API_URL;

export const getProductById = async (id: string) => {
    try {
        const response = await axios.get(`${URL}/products/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }   
}