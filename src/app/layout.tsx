import "./global.scss";
import "@/styles/fonts.module.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "bookmymusic",
  description: "Powered by SeamlessC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: 'Lexend'
        }}
      >
        {children}
      </body>
    </html>
  );
}
