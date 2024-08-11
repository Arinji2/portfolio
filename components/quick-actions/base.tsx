"use client";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowUp, Mail } from "lucide-react";
import Link from "next/link";
import { Suspense, useEffect, useMemo, useState } from "react";
import ModalController from "./modal-controller";

export default function QuickActions() {
  const [isScrollable, setIsScrollable] = useState(false);

  const goToTop = useMemo(() => {
    return () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrollable(true);
      } else {
        setIsScrollable(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Suspense fallback={<></>}>
        <ModalController />
      </Suspense>
      <div className="w-fit h-fit fixed top-0 right-0 flex flex-row items-center justify-end z-[200] p-3">
        <div className="w-fit h-fit flex flex-row items-stretch justify-center p-3 bg-black/50 backdrop-blur-sm rounded-md ">
          <Link
            onClick={() => {
              navigator.clipboard.writeText(
                process.env.NEXT_PUBLIC_FROM_EMAIL!
              );
              window.dispatchEvent(new Event("emailCopied"));
            }}
            href={`mailto:${process.env.NEXT_PUBLIC_FROM_EMAIL}`}
          >
            <Mail className="size-5 md:size-8 text-brand-primary" />
          </Link>
          <div className="w-1 mx-3  bg-white/20"></div>
          <Link
            href={`https://github.com/Arinji2`}
            target="_blank"
            aria-label="Github Link"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="size-5 md:size-8 text-brand-primary"
            />
          </Link>
          <div className="w-1 mx-3  bg-white/20"></div>
          <button
            disabled={!isScrollable}
            onClick={goToTop}
            className="w-fit h-fit "
          >
            <ArrowUp
              className={`${
                isScrollable ? "opacity-100 " : "opacity-50 "
              } size-5 md:size-8 text-brand-primary`}
            />
          </button>
        </div>
      </div>
    </>
  );
}
