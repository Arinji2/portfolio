"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export default function CodeModal({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <div
      id="root"
      className={`${
        isOpen ? "translate-y-0 " : "translate-y-full "
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
        <h2 className="text-2xl text-center xl:text-left md:text-5xl xl:text-7xl text-white/40 font-medium z-20">
          A Glimpse Into My <span className="text-brand-primary">Code</span>
        </h2>
      </div>
      {children}
    </div>
  );
}