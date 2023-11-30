"use client";

import { useRouter } from "next/navigation";
import useAuthModal from "@/hooks/useAuthModal";

import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "../Button";

interface HeaderProps {
 children: React.ReactNode;
 className: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
 const router = useRouter();
 const { onOpen } = useAuthModal();

 return (
  <div
   className={twMerge(
    `h-fit bg-gradient-to-b from-purple-800 p-6 text-white`,
    className,
   )}
  >
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
     <>
      <div>
       <Button
        className="bg-transparent text-neutral-300 hover:text-white font-semibold"
        onClick={onOpen}
       >
        Sign Up
       </Button>
      </div>
      <div>
       <Button
        className="bg-neutral-100/10 px-4 py-2 hover:bg-neutral-100/20 drop-shadow-lg"
        onClick={onOpen}
       >
        Sign In
       </Button>
      </div>
     </>
    </div>
   </div>
   {children}
  </div>
 );
};

export default Header;
