import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HeaderCurrent } from "@/components/headerCurrent";
import Footer from "@/components/footer";
import { LoginProvider } from "@/components/Context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <LoginProvider>
        <body className={inter.className}>
          <HeaderCurrent />
          <main>{children}</main>
          <Footer />
        </body>
      </LoginProvider>
    </html>
  );
}
