"use client";
import { getOrders } from "@/utils/postOrder";
import { useEffect, useState } from "react";
import { useLoginContext } from "../loginContext";
import { IOrder } from "@/app/types";

const HistoryOrders = () => {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const { token } = useLoginContext();

  useEffect(() => {
    console.log(token);

    getOrders(token).then((response) => {
      setOrders(response);
    });
  }, [token]);

  return (
    <div>
      <h1 className="flex justify-center gap-4 flex-wrap">
        {orders.map(({ id, status, date, products }) => {
          return (
            <div key={id} className="border-2 border-red-500 rounded-md ">
              <p>{id}</p>
              <p>{status}</p>
              <p>{date}</p>
              <div>
                {products.map(({ name }) => (
                  <p key={name}>{name}</p>
                ))}
              </div>
            </div>
          );
        })}
      </h1>
    </div>
  );
};

export default HistoryOrders;
