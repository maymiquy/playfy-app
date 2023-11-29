"use client";

import { useState, useEffect } from "react";
import Modal from "@/components/Modal";

const ModalProvider = () => {
 const [isMounted, setIsMounted] = useState(false);

 useEffect(() => {
  setIsMounted(true);
 }, []);

 if (!isMounted) {
  return null;
 }

 return (
  <>
   <Modal title="Testing" description="test" isOpen onChange={() => {}}>
    children here
   </Modal>
  </>
 );
};

export default ModalProvider;
