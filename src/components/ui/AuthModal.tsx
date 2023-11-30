"use client";

import {
 useSessionContext,
 useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

import useAuthModal from "@/hooks/useAuthModal";

import Modal from "../Modal";

const AuthModal = () => {
 const router = useRouter();
 const { session } = useSessionContext();
 const { onClose, isOpen } = useAuthModal();
 const supabaseClient = useSupabaseClient();

 useEffect(() => {
  if (session) {
   router.refresh();
   onClose();
  }
 }, [session, router, onClose]);

 const onChange = (open: boolean) => {
  if (!open) {
   onClose();
  }
 };

 return (
  <Modal
   title="Welcome back to Playfy"
   description="Please sign in or sign up to continue"
   isOpen={isOpen}
   onChange={onChange}
  >
   <Auth
    theme="dark"
    supabaseClient={supabaseClient}
    providers={["google", "github"]}
    appearance={{
     theme: ThemeSupa,
     variables: {
      default: {
       colors: {
        brand: "#404040",
        brandAccent: "#22c55e",
       },
      },
     },
    }}
   />
  </Modal>
 );
};

export default AuthModal;
