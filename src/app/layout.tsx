import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "@/styles/globals.css";
import Sidebar from "@/components/Sidebar";
import SupabaseProvider from "../../packages/services/SupabaseProvider";
import UserProvider from "../../packages/services/UserProvider";

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
      <Sidebar>{children}</Sidebar>
     </UserProvider>
    </SupabaseProvider>
   </body>
  </html>
 );
}
