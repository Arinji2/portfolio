"use client";
import { useEffect, useState } from "react";

export default function Toast() {
  const [toast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  useEffect(() => {
    const mailSent = () => {
      setToast(true);
      setToastMessage("Email Sent Successfully!");
      setTimeout(() => {
        setToast(false);
      }, 5000);
    };
    const emailCopied = () => {
      setToast(true);
      setToastMessage("Email Copied!");
      setTimeout(() => {
        setToast(false);
      }, 5000);
    };
    window.addEventListener("mailSent", mailSent);
    window.addEventListener("emailCopied", emailCopied);

    return () => {
      window.removeEventListener("mailSent", mailSent);
      window.removeEventListener("emailCopied", emailCopied);
    };
  }, []);

  return (
    <div
      className={`${
        toast ? "translate-y-0 " : "-translate-y-[100px] "
      }transition-all ease-in-out duration-300 z-[190] p-4 fixed top-0 w-full h-[100px] bg-brand-background-primary  flex flex-col items-start justify-center`}
    >
      <p className="text-white text-[20px]">{toastMessage}</p>
    </div>
  );
}
