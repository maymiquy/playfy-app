import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "@/styles/globals.css";

import Sidebar from "@/components/ui/Sidebar";

import SupabaseProvider from "@/libs/providers/SupabaseProvider";
import UserProvider from "@/libs/providers/UserProvider";
import ModalProvider from "@/libs/providers/ModalProvider";

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
