import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "@/styles/globals.css";

import Sidebar from "@/components/Sidebar";
import ModalProvider from "@/services/ModalProvider";

import SupabaseProvider from "@/services/SupabaseProvider";
import UserProvider from "@/services/UserProvider";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
 title: "Playfy",
 description: "Playfy to listen your music",
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <html lang="en">
   <body className={font.className}>
    <SupabaseProvider>
     <UserProvider>
      <ModalProvider />
      <Sidebar>{children}</Sidebar>
     </UserProvider>
    </SupabaseProvider>
   </body>
  </html>
 );
}
