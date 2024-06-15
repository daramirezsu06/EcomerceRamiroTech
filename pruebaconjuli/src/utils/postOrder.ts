import axios from "axios";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

async function createOrder(products: string[], token: string | undefined) {
  try {
    if (!products.length) {
      throw new Error("No products in the order");
    } else if (!token) {
      throw new Error("No token provided");
    } else if (!apiUrl) {
      throw new Error("No API URL provided");
    }
    const response = await axios.post(
      `${apiUrl}/orders`,
      { products },
      {
        headers: {
          Authorization: token,
          "ngrok-skip-browser-warning": "true",
        },
      }
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
}

async function getOrders(token: string | null) {
  try {
    if (!token) {
      throw new Error("No token provided");
    } else if (!apiUrl) {
      throw new Error("No API URL provided");
    }
    const response = await axios.get(`${apiUrl}/users/orders`, {
      headers: {
        Authorization: token,
        "ngrok-skip-browser-warning": "true",
      },
    });
    return response.data;
  } catch (error) {
    
    console.error("Error en la solicitud:", error);
    throw error; 
  }
}

export { createOrder, getOrders };
