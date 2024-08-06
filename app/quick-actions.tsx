"use client";
import { ArrowUp, Mail } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";

export default function QuickActions() {
  const goToTop = useMemo(() => {
    return () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  }, []);

  return (
    <div className="w-fit h-fit fixed top-0 right-0 flex flex-row items-center justify-end z-[200] p-3">
      <div className="w-fit h-fit flex flex-row items-stretch justify-center p-3 bg-black/50 backdrop-blur-sm rounded-md ">
        <Link
          onClick={() => {
            navigator.clipboard.writeText(process.env.NEXT_PUBLIC_FROM_EMAIL!);
            window.dispatchEvent(new Event("emailCopied"));
          }}
          href={`mailto:${process.env.NEXT_PUBLIC_FROM_EMAIL}`}
        >
          <Mail className="size-8 text-brand-primary" />
        </Link>
        <div className="w-1 ml-5 mr-3  bg-white/20"></div>
        <button onClick={goToTop} className="w-fit h-fit ">
          <ArrowUp className="size-8 text-brand-primary " />
        </button>
      </div>
    </div>
  );
}
