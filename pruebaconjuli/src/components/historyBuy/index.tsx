"use client";
import { getOrders } from "@/utils/postOrder";
import { useEffect, useState } from "react";
import { useLoginContext } from "../Context";
import { IOrder } from "@/app/types";

const HistoryOrders = () => {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const { token } = useLoginContext();

  useEffect(() => {
    getOrders(token).then((response) => {
      setOrders(response);
    });
  }, [token]);

  return (
    <div className="md:w-3/4 mx-auto py-4">
      <h1 className="text-2xl font-bold text-center my-8">Order History</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {orders.map(({ id, status, date, products }) => (
          <div key={id} className="border border-red-300 rounded-md p-4">
            <p className="font-semibold text-lg">Order ID: {id}</p>
            <p>Status: {status}</p>
            <p>Date: {date}</p>
            <div className="mt-4">
              <p className="font-semibold">Products:</p>
              <ul className="list-disc ml-8">
                {products.map(({ name }, index) => (
                  <li key={index}>{name}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryOrders;
