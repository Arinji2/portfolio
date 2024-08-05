"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { DesignType, TechStackType } from "./main";

export default function ProjectInfo({
  stack,
  design,
}: {
  stack: TechStackType[];
  design: DesignType;
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className={`${
        expanded ? "h-full overflow-y-auto " : "h-[80px] overflow-y-hidden "
      }w-full md:w-[500px]  transition-all ease-in-out duration-500 shrink-0 shadow-black shadow-lg md:aspect-video flex flex-col gap-6 bg-brand-background-primary  p-6 rounded-md items-start justify-start aspect-square  relative group z-30`}
    >
      <div className="w-full h-fit shrink-0 flex flex-row items-center  justify-start gap-3">
        <p className="text-2xl text-white font-bold">Info about the Project</p>
        <button className="w-fit h-fit" onClick={() => setExpanded(!expanded)}>
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
            <p className="text-brand-primary text-[15px] font-medium">
              {`${index + 1}. ${stack.key}`}
            </p>
            <p className="text-white/50 text-[15px] line-clamp-2">
              <span className="text-white">{`${stack.name}:`}</span>
              {` ${stack.used}`}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full h-fit flex flex-col items-start justify-start gap-3">
        <p className="text-lg text-white font-bold">B. Design</p>

        <div className="w-full h-fit flex flex-col items-start justify-start gap-2 pl-3">
          <p className="text-brand-primary text-[15px] font-medium">
            {design.type}
          </p>
          <p className="text-white/70 text-[15px]">{design.details}</p>
        </div>
      </div>
    </div>
  );
}
