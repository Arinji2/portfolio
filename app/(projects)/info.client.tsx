"use client";

import { trackEvent } from "@/analytics/events";
import { CheckCircle, ChevronDown, XCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { InfoType } from "./main";

export default function ProjectInfo({
  info,
  name,
}: {
  info: InfoType;
  name: string;
}) {
  const { stack, design, image, about, stats } = info;
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className={`${
        expanded ? "h-full " : "h-[110px] md:h-[90px] overflow-hidden  "
      }w-[90vw] md:w-[500px]   transition-all ease-in-out duration-500 shrink-0 shadow-black shadow-lg md:aspect-video flex flex-col gap-6 bg-brand-background-primary  p-6 rounded-sm items-start justify-start   relative group z-30`}
    >
      <div className="w-full h-fit shrink-0 flex flex-row items-center  justify-start gap-3">
        <p className="xl:text-xl md:text-xl text-lg text-white font-bold">
          Info about the Project
        </p>
        <button
          aria-label={`${expanded ? "Collapse" : "Expand"} the info`}
          className="w-fit h-fit"
          onClick={() => {
            setExpanded(!expanded);
            if (expanded) {
              trackEvent("project_info_collapsed", {
                projectName: name,
              });
            } else {
              trackEvent("project_info_expanded", {
                projectName: name,
              });
            }
          }}
        >
          <ChevronDown
            strokeWidth={3}
            className={`${
              expanded ? "rotate-180 " : ""
            } w-[30px] h-[30px] text-brand-primary transition-all ease-in-out duration-500`}
          />
        </button>
      </div>
      <div className="w-full h-full overflow-y-auto gap-8 flex flex-col items-center justify-start pr-2">
        <div className="w-full h-fit flex flex-col items-start justify-start gap-3">
          <p className="md:text-lg  text-white font-bold">A. Tech Stack</p>
          {stack.map((stack, index) => (
            <div
              key={index}
              className="w-full h-fit flex flex-col items-start justify-start gap-2 pl-3"
            >
              <p className="text-brand-primary xl:text-sm text-xs font-bold">
                {`${index + 1}. ${stack.key}`}
              </p>
              <p className="text-white/50  xl:text-sm text-xs">
                <span className="text-white font-bold">{`${stack.name}:`}</span>
                {` ${stack.used}`}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full h-fit flex flex-col items-start justify-start gap-3">
          <p className="md:text-lg text-white font-bold">B. Design</p>

          <div className="w-full h-fit flex flex-col items-start justify-start gap-2 pl-3">
            <p className="text-brand-primary  xl:text-sm text-xs font-bold">
              {design.type}
            </p>
            <p className="text-white/70  xl:text-sm text-xs">
              {design.details}
            </p>
            {image && (
              <div className="w-full aspect-video relative border-[5px] shadow-black shadow-lg border-black rounded-sm">
                <Image
                  src={image}
                  fill
                  className="object-fill w-full h-full"
                  alt="vibeify"
                  sizes="100vw"
                  quality={50}
                />
              </div>
            )}
          </div>
        </div>
        <div className="w-full h-fit flex flex-col items-start justify-start gap-3">
          <p className="text-lg text-white font-bold">C. About</p>

          <div className="w-full h-fit flex flex-col items-start justify-start gap-2 pl-3">
            <p className="text-white/70  xl:text-sm text-xs">{about}</p>
          </div>
        </div>
        <div className="w-full h-fit flex flex-col items-start justify-start gap-3">
          <p className="text-lg text-white font-bold">D. Stats</p>

          <div className="w-full h-fit flex flex-col items-start justify-start gap-2 pl-3">
            {stats?.map((stat, index) => (
              <div
                key={index}
                className="w-fit h-fit flex flex-row items-center  justify-start"
              >
                <p className="text-brand-primary  xl:text-sm text-xs font-medium">
                  {stat.name}
                </p>
                <p className="text-white/70  xl:text-sm text-xs">
                  :{" "}
                  {typeof stat.value === "boolean" ? (
                    stat.value ? (
                      <CheckCircle className="size-3 inline text-green-500" />
                    ) : (
                      <XCircle className="size-3 inline text-red-500" />
                    )
                  ) : (
                    stat.value
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
// />
