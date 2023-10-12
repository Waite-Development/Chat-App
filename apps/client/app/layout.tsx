import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ServerList from "@client/components/ServerList";
import ServerNav from "@client/components/ServerNav";
import ServerChat from "@client/components/ServerChat";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harmony Chat",
  description: "Encrypted Messaging App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-white bg-slate-700 flex">
        <ServerList />
        <ServerNav />
        <ServerChat />
      </body>
    </html>
  );
}
