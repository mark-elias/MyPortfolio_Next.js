import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

export const metadata: Metadata = {
  title: "Marcos Elias",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar></NavBar>
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
