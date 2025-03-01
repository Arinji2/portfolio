"use client";

import { trackEvent } from "@/analytics/events";
import WidthWrapper from "@/components/widthWrapper";
import { useIsVisible } from "@/utils/useIsVisible";
import { ChevronDown, ChevronDownCircle, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";
import { InfoType } from "./data";
import { useGlobalInfoContext, useInfoContext } from "./info-context";

export function InfoWrapper({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  const { isOpen, setIsOpen } = useInfoContext();
  const { focusedIndex } = useGlobalInfoContext();

  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (focusedIndex !== index) {
      setIsOpen(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusedIndex, index]);

  useEffect(() => {
    function scrollToTop() {
      const maxHeight = -parentRef.current?.scrollHeight! + 100;
      parentRef.current?.scrollTo({ top: maxHeight, behavior: "smooth" });
    }
    if (!isOpen) {
      setTimeout(() => {
        scrollToTop();
      }, 500);
    } else {
      const codeModal = document.getElementById("code-modal")!;

      const rect = parentRef.current?.getBoundingClientRect()!;

      setTimeout(() => {
        codeModal.scrollTo({
          top: rect.top + rect.height / 2,
          behavior: "smooth",
        });
      }, 500);
    }

    window.addEventListener("resize", scrollToTop);
    return () => {
      window.removeEventListener("resize", scrollToTop);
    };
  }, [isOpen]);

  return (
    <WidthWrapper transparent>
      <div
        ref={parentRef}
        className={`${
          isOpen
            ? " h-[70svh] xl:h-[80svh] overflow-y-auto"
            : " xl:h-[170px] h-[130px]  overflow-y-hidden"
        } ${
          focusedIndex !== index ? "opacity-50" : "opacity-100"
        } w-full no-scrollbar rounded-md flex flex-col-reverse justify-start transition-all ease-in-out duration-500   xl:flex-row items-start px-5 bg-[#403A3A] xl:justify-center xl:gap-10`}
      >
        {children}
      </div>
    </WidthWrapper>
  );
}

export function InfoContent({
  index,
  info,
}: {
  index: string;
  info: InfoType;
}) {
  const { isOpen, setIsOpen } = useInfoContext();
  const { isVisible, targetRef } = useIsVisible(
    {
      root: null,
      rootMargin: "200px",
      threshold: 0.1,
    },
    false,
  );

  const videoRef = useRef<HTMLVideoElement>(null);

  const startVideoOnMouseMove = useCallback(async () => {
    try {
      await videoRef?.current!.play();
    } catch (e) {}
  }, []);

  const stopVideoOnMove = useCallback(() => {
    try {
      videoRef?.current!.pause();
    } catch (e) {}
  }, []);

  useEffect(() => {
    if (isVisible) {
      startVideoOnMouseMove();
    } else {
      stopVideoOnMove();
    }
  }, [isVisible, startVideoOnMouseMove, stopVideoOnMove]);

  const { focusedIndex, setFocusedIndex } = useGlobalInfoContext();

  return (
    <div className="w-full  xl:sticky top-0 h-full pt-5 flex flex-col items-center xl:items-center justify-start gap-5 xl:pb-5">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          const previousFocusedIndex = focusedIndex;
          setFocusedIndex(parseInt(index));
          if (!isOpen) {
            trackEvent("code_card_clicked", {
              tite: info.title,
              previousFocusedIndex: previousFocusedIndex,
            });
          }
        }}
        className="w-full shrink-0 h-[90px] xl:h-[120px] flex flex-row items-center justify-center p-2 "
      >
        <h3 className=" xl:text-xl md:text-lg w-full overflow-hidden text-center xl:text-left font-medium text-white/80 ">
          <span className="line-clamp-2 w-fit">
            {" "}
            <span className="text-brand-primary">{index}.</span> {info.title}
          </span>
          <span className="shrink-0 text-brand-primary xl:text-lg md:text-base text-sm block md:inline">{`> ${info.language}`}</span>
        </h3>
        <div className="w-fit px-4 flex flex-col items-center justify-center h-full shrink-0">
          <ChevronDownCircle
            className={`${
              isOpen ? "rotate-180" : ""
            } size-6 md:size-8 text-brand-primary/50 transition-all ease-in-out duration-500 `}
          />
        </div>
      </button>
      <p className="xl:text-sm min-h-[40px] line-clamp-3 xl:line-clamp-2 text-xs text-brand-primary/50  text-center">
        {info.info}
      </p>
      <Link
        tabIndex={isOpen ? 0 : -1}
        href={info.githubURL}
        onClick={() => {
          trackEvent("code_github_clicked", {
            title: info.title,
          });
        }}
        target="_blank"
        className="w-[80%] md:w-[260px] group rounded-md h-fit py-3 bg-brand-background-primary flex flex-row items-center justify-between px-2 gap-2"
      >
        <p className="text-white group-hover:text-brand-primary transition-all ease-in-out duration-500 text-xs  xl:text-sm tracking-tight font-bold">
          View In Github
        </p>
        <ChevronRight className="w-[30px] group-hover:text-white transition-all ease-in-out duration-500 h-[30px] font-bold text-brand-primary" />
      </Link>

      {info.video.length > 0 && (
        <div
          ref={targetRef as any}
          className="w-fit h-fit max-w-[400px] xl:min-h-[200px]  rounded-md overflow-hidden mt-auto shadow-lg shadow-black"
        >
          <video
            ref={videoRef}
            src={info.video}
            muted
            playsInline
            className="w-full object-fill"
            loop
          ></video>
        </div>
      )}
      <ChevronDown
        strokeWidth={3}
        className="w-fit h-fit animate-bounce xl:hidden size-7 text-brand-primary/50 transition-all ease-in-out duration-500 "
      />
    </div>
  );
}
