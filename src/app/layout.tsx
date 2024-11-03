import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Theme, ThemePanel } from "@radix-ui/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PimenWallet",
  description: "WIP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Theme appearance="dark">
          {children}
          {/* <ThemePanel /> */}
        </Theme>
      </body>
    </html>
  );
}
