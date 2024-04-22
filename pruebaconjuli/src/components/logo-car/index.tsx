"use client";
import { RiShoppingCartLine } from "@remixicon/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLoginContext } from "../Context";
export const LogoCar: React.FC = (): React.ReactElement => {
  const { total } = useLoginContext();

  return (
    <Link href="/cart">
      <div className="flex items-center gap-2 ">
        {total == 0 ? (
          <p>{total}</p>
        ) : (
          <p className="animate-bounce">{total}</p>
        )}

        <div>
          <RiShoppingCartLine color="#ffffff" />
        </div>
      </div>
    </Link>
  );
};
