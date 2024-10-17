"use client";

import { CheckCircle, ChevronDown, XCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { InfoType } from "./main";

export default function ProjectInfo({
  info,
  imageName,
}: {
  info: InfoType;
  imageName: string;
}) {
  const { stack, design, image, about, stats } = info;
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className={`${
        expanded
          ? "h-full overflow-y-auto "
          : "h-[110px] md:h-[80px] overflow-y-hidden scrollbar-stable "
      }w-[90vw] md:w-[500px]  transition-all ease-in-out duration-500 shrink-0 shadow-black shadow-lg md:aspect-video flex flex-col gap-6 bg-brand-background-primary  p-6 rounded-md items-start justify-start aspect-square  relative group z-30`}
    >
      <div className="w-full h-fit shrink-0 flex flex-row items-center  justify-start gap-3">
        <p className="text-2xl text-white font-bold">Info about the Project</p>
        <button
          aria-label={`${expanded ? "Collapse" : "Expand"} the info`}
          className="w-fit h-fit"
          onClick={() => setExpanded(!expanded)}
        >
          <ChevronDown
            strokeWidth={3}
            className={`${
              expanded ? "rotate-180 " : ""
            } w-[30px] h-[30px] text-brand-primary transition-all ease-in-out duration-500`}
          />
        </button>
      </div>
      <div className="w-full h-fit flex flex-col items-start justify-start gap-3">
        <p className="text-lg text-white font-bold">A. Tech Stack</p>
        {stack.map((stack, index) => (
          <div
            key={index}
            className="w-full h-fit flex flex-col items-start justify-start gap-2 pl-3"
          >
            <p className="text-brand-primary  text-[14px] xl:text-[15px] font-medium">
              {`${index + 1}. ${stack.key}`}
            </p>
            <p className="text-white/50  text-[14px] xl:text-[15px]">
              <span className="text-white">{`${stack.name}:`}</span>
              {` ${stack.used}`}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full h-fit flex flex-col items-start justify-start gap-3">
        <p className="text-lg text-white font-bold">B. Design</p>

        <div className="w-full h-fit flex flex-col items-start justify-start gap-2 pl-3">
          <p className="text-brand-primary  text-[14px] xl:text-[15px] font-medium">
            {design.type}
          </p>
          <p className="text-white/70  text-[14px] xl:text-[15px]">
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
          <p className="text-white/70  text-[14px] xl:text-[15px]">{about}</p>
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
              <p className="text-brand-primary  text-[14px] xl:text-[15px] font-medium">
                {stat.name}
              </p>
              <p className="text-white/70  text-[14px] xl:text-[15px]">
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
  );
}
// />
