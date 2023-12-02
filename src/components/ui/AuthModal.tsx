"use client";

import {
 useSessionContext,
 useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import useAuthModal from "@/hooks/useAuthModal";

import Modal from "../Modal";
import Button from "../Button";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";

const AuthModal = () => {
 const router = useRouter();
 const { session } = useSessionContext();
 const { onClose, isOpen } = useAuthModal();
 const supabaseClient = useSupabaseClient();

 useEffect(() => {
  if (session) {
   router.push("/");
   onClose();
  }
 }, [session, router, onClose]);

 const onChange = (open: boolean) => {
  if (!open) {
   onClose();
  }
 };

 const onClickSignInGoogle = async () => {
  await supabaseClient.auth.signInWithOAuth({
   provider: "google",
  });
 };

 const onClickSignInGithub = async () => {
  await supabaseClient.auth.signInWithOAuth({
   provider: "github",
  });
 };

 return (
  <Modal
   title="Welcome back to Playfy"
   description="Please sign in to continue"
   isOpen={isOpen}
   onChange={onChange}
  >
   <div className="h-px bg-neutral-700 col-span-2 mt-3 mb-9" />
   <div className="flex flex-col gap-y-4">
    <Button
     className="flex justify-center items-center py-2 px-4 bg-neutral-200 hover:bg-white text-neutral-800 font-bold w-full drop-shadow-lg"
     onClick={onClickSignInGoogle}
    >
     <FcGoogle className="mr-3 h-5 w-5" />
     Sign in with Google
    </Button>
    <div className="flex flex-row justify-center items-center space-x-2">
     <div className="h-px bg-neutral-700 col-span-2 w-24" />
     <p className="text-neutral-400 text-lg font-medium">or</p>
     <div className="h-px bg-neutral-700 col-span-2 w-24" />
    </div>
    <Button
     className="flex justify-center items-center py-2 px-4 bg-gray-800 hover:bg-gray-900 text-neutral-200 font-bold w-full drop-shadow-lg"
     onClick={onClickSignInGithub}
    >
     <IoLogoGithub className="mr-3 h-5 w-5" />
     Sign in with Github
    </Button>
   </div>
  </Modal>
 );
};

export default AuthModal;
