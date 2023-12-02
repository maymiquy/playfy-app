"use client";

import { useRouter } from "next/navigation";
import useAuthModal from "@/hooks/useAuthModal";

import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import Button from "../Button";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/useUser";
import toast from "react-hot-toast";
import Link from "next/link";

interface HeaderProps {
 children: React.ReactNode;
 className: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
 const router = useRouter();
 const { onOpen } = useAuthModal();

 const supabaseClient = useSupabaseClient();
 const { user } = useUser();

 const handleLogout = async () => {
  const { error } = await supabaseClient.auth.signOut();
  // TODO: Reset any playing songs
  router.refresh();

  if (error) {
   toast.error(error.message);
  } else {
   toast.success("Loggout success");
  }
 };

 return (
  <div
   className={twMerge(
    `h-fit bg-gradient-to-b from-purple-800 py-7 px-6 text-white`,
    className,
   )}
  >
   <div className="absolute top-0 right-[38px] md:top-2 md:right-[46px]">
    <Link
     className="bg-transparent text-neutral-400 text-[10px] underline font-sans hover:text-neutral-200 font-semibold"
     href="https://github.com/maymiquy/playfy-app/issues"
    >
     find a bug?
    </Link>
   </div>
   <div className="w-full flex items-center justify-between mb-4">
    <div className="hidden md:flex gap-x-2 items-center">
     <button
      className="rounded-full bg-neutral-100/10 p-1 flex items-center justify-center hover:bg-neutral-100/20 transition"
      onClick={() => router.back()}
     >
      <RxCaretLeft className="text-white" size={35} />
     </button>
     <button
      className="rounded-full bg-neutral-100/10 p-1 flex items-center justify-center hover:bg-neutral-100/20 transition"
      onClick={() => router.forward()}
     >
      <RxCaretRight className="text-white" size={35} />
     </button>
    </div>
    <div className="flex md:hidden gap-x-2 items-center">
     <button className="rounded-full bg-neutral-100/10 flex items-center justify-center hover:bg-neutral-100/20 transition p-2">
      <HiHome className="text-white" size={20} />
     </button>
     <button className="rounded-full bg-neutral-100/10 flex items-center justify-center hover:bg-neutral-100/20 transition p-2">
      <BiSearch className="text-white" size={20} />
     </button>
    </div>
    <div className="flex justify-between items-center gap-x-4">
     {!user ? (
      <>
       <div>
        <Button
         className="bg-neutral-100/10 px-4 py-2 hover:bg-neutral-100/20 drop-shadow-lg"
         onClick={onOpen}
        >
         Sign In
        </Button>
       </div>
      </>
     ) : (
      <div className="flex gap-x-4 items-center">
       <Button
        className="bg-neutral-100/10 hover:bg-red-600/75 focus:bg-red-600/90 px-4 py-2 text-neutral-300 transition"
        onClick={handleLogout}
       >
        Logout
       </Button>
       <Button className="rounded-full bg-neutral-100/10 hover:bg-neutral-100/20 p-3 flex items-center justify-center transition">
        <FaUserAlt />
       </Button>
      </div>
     )}
    </div>
   </div>
   {children}
  </div>
 );
};

export default Header;
