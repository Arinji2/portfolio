"use client";

import { isInert } from "@/utils/inert";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export default function DesignerModal({
  children,
}: {
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const memoizedSearchParams = useMemo(() => {
    if (searchParams.get("designer") === "true") {
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
  }, []);

  return (
    <div
      id="designer-modal"
      inert={isInert(!isOpen) as any}
      className={`${
        isOpen ? "translate-y-0 " : "translate-y-full "
      }overflow-y-auto scrollbar-stable ease-in-out duration-700 flex flex-col items-center justify-start top-0 left-0  z-[150] w-full h-[100dvh] bg-[#403A3A] fixed`}
    >
      <div className="h-fit xl:h-[40%] shrink-0 w-full relative flex flex-col items-center justify-center p-5 pt-20 xl:pt-0">
        <Image
          src="/designer.png"
          fill
          className="object-cover object-[30%_25%]"
          alt="Hero Image"
          priority
          sizes="40vw"
          quality={50}
        />
        <div className="w-full h-full absolute  top-0 left-0 bg-gradient-to-r from-black/90 to-black/60 from-30%"></div>
        <h2 className="text-2xl text-center xl:text-left md:text-5xl xl:text-7xl text-white/40 font-medium z-20">
          A Showcase Of My <span className="text-red-500">Designs</span>
        </h2>
      </div>
      {children}
    </div>
  );
}
