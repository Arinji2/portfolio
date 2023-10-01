"use client";
import * as React from "react";
import { useState, useEffect } from "react";

export default function Toast() {
  const [toast, setToast] = useState(false);
  useEffect(() => {
    window.addEventListener("mailSent", () => {
      setToast(true);
      setTimeout(() => {
        setToast(false);
      }, 5000);
    });
  }, []);

  return (
    <div
      className={`${
        toast ? "translate-x-0 " : "-translate-x-full "
      }transition-all ease-in-out duration-300 p-4 fixed top-0 w-full h-[100px] bg-brand-background-primary z-50 flex flex-col items-start justify-center`}
    >
      <p className="text-white text-[20px]">Email Sent Successfully!</p>
    </div>
  );
}
