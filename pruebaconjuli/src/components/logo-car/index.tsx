"use client";
import { RiShoppingCartLine } from "@remixicon/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLoginContext } from "../Context";
export const LogoCar: React.FC = (): React.ReactElement => {
  const { total } = useLoginContext();

  return (
    <Link href="/cart">
      <div className="flex items-center gap-2">
        <p>{total}</p>
        <div>
          <RiShoppingCartLine color="#ffffff" />
        </div>
      </div>
    </Link>
  );
};
