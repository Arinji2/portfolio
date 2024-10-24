"use client";

import { isInert } from "@/utils/inert";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export default function CodeModal({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const memoizedSearchParams = useMemo(() => {
    if (searchParams.get("developer") === "true") {
      return true;
    } else {
      return false;
    }
  }, [searchParams]);

  useEffect(() => {
    if (memoizedSearchParams) {
      setIsOpen(true);

      document.body.style.overflow = "hidden";
    } else {
      setIsOpen(false);
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [memoizedSearchParams]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        router.push("/");
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [router]);

  return (
    <div
      id="code-modal"
      inert={isInert(!isOpen) as any}
      className={`${
        isOpen ? "translate-y-0 opacity-100 " : "translate-y-full opacity-0 "
      }overflow-y-auto scrollbar-stable ease-in-out duration-700 flex flex-col items-center justify-start top-0 left-0 z-[150] w-full h-[100svh] bg-black fixed`}
    >
      <div className="h-fit xl:h-[40%] shrink-0 w-full relative flex flex-col items-center justify-center p-5 pt-20 xl:pt-0">
        <Image
          src="/code.png"
          fill
          className="object-cover absolute object-right"
          alt="Hero Image"
          priority
          sizes="40vw"
          quality={50}
        />
        <div className="w-full h-full absolute  top-0 left-0 bg-gradient-to-r from-black/80 to-black/50 from-30%"></div>
        <h2 className=" text-center xl:text-left xl:text-4xl md:text-3xl text-2xl  text-white/40 font-bold tracking-title z-20">
          A Glimpse Into My <span className="text-brand-primary">Code</span>
        </h2>
      </div>
      {children}
    </div>
  );
}
