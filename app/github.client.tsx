"use client";

import { trackEvent } from "@/analytics/events";
import Link from "next/link";

export function GithubButton() {
  return (
    <Link
      href="https://github.com/Arinji2"
      onClick={() => {
        trackEvent("github_link_clicked", {
          where: "section",
        });
      }}
      target="_blank"
      className="w-fit h-fit flex flex-col items-center justify-center gap-1"
    >
      <p className="text-white  text-center text-[20px] font-medium  hover:text-brand-primary">
        Show me More!
      </p>
      <div className="bg-brand-primary h-[2px] w-full"></div>
    </Link>
  );
}
