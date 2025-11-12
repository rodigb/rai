import type { Metadata } from "next";
import "./globals.css";
import { pixelifySans } from "./statics/fonts";

export const metadata: Metadata = {
  title: "RAI",
  description: "AI agent application - RAI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div id="raiApp" className={`${pixelifySans.className}`}>
          {children}
        </div>
      </body>
    </html>
  );
}
