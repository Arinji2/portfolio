"use client;";

import { trackEvent } from "@/analytics/events";
import Link from "next/link";

export function TechBlock({
  name,
  description,
  post,
  time,
  link,
}: {
  name: string;
  description: string;
  post: string;
  time: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      onClick={() => {
        trackEvent("experience_link_clicked", {
          name: name,
        });
      }}
      target="_blank"
      className="hover:scale-90 scale-[.80] group hover:cursor-pointer will-change-transform transition-all ease-in-out duration-300 w-[300px] md:w-[400px] bg-brand-background-overlay bg-opacity-60 rounded-md relative shrink-0 h-fit py-8 flex flex-col items-center justify-center gap-8 text-center"
    >
      <h3 className="xl:text-3xl md:text-2xl text-xl text-brand-primary font-bold">
        {name}
      </h3>
      <div className="w-[90%] h-fit flex flex-col items-center justify-center text-center gap-7">
        <p className="text-white/60 transition-color ease-in-out duration-200 group-hover:text-white xl:text-xl md:text-lg text-base ">
          {description}
        </p>
        <p className=" text-white/80  xl:text-xl md:text-lg text-base font-bold">
          {post}
        </p>
        <p className="  xl:text-xl md:text-lg text-base text-brand-primary">
          {time}
        </p>
      </div>
    </Link>
  );
}
