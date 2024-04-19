import { RiShoppingCartLine } from "@remixicon/react";
import Link from "next/link";
export const LogoCar: React.FC = (): React.ReactElement => {
  return (
    <Link href="/cart">
      <div>
        <RiShoppingCartLine color="#ffffff" />
      </div>
    </Link>
  );
};
