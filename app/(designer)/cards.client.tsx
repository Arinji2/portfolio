"use client";

import autoAnimate from "@formkit/auto-animate";
import { ChevronDown, Search, X } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { DesignData, DesignDataType } from "./data";

export type FilteringType = {
  basisOf: "projectName" | "featureName";
  value: string;
};

function formatText(text: string) {
  return text.replace(/(^\w|-\w)/g, (match) =>
    match.replace("-", " ").toUpperCase()
  );
}

export function DesignsSection() {
  const searchParams = useSearchParams();
  const params = useMemo(() => {
    return new URLSearchParams(searchParams);
  }, [searchParams]);

  const [isFiltering, setIsFiltering] = useState<null | FilteringType>(null);
  const [designDataState, setDesignDataState] =
    useState<DesignDataType[]>(DesignData);

  const [resetSelection, setResetSelection] = useState(false);

  const parent = useRef<HTMLDivElement>(null);
  const anchor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (parent.current) autoAnimate(parent.current);
  }, [parent]);

  const memoizedBasisOfSearchParam = useMemo(
    () => searchParams.get("basisOf"),
    [searchParams]
  );
  const memoizedIsValueOfSearchParam = useMemo(
    () => searchParams.get("value"),
    [searchParams]
  );

  useEffect(() => {
    if (resetSelection) {
      params.delete("basisOf");
      params.delete("value");
      window.history.pushState(null, "", `?${params.toString()}`);
      setResetSelection(false);
      return;
    }

    if (isFiltering) {
      if (
        isFiltering.basisOf === memoizedBasisOfSearchParam &&
        isFiltering.value === memoizedIsValueOfSearchParam
      ) {
        return;
      }
    }

    if (memoizedBasisOfSearchParam && memoizedIsValueOfSearchParam) {
      const formattedValue = memoizedIsValueOfSearchParam
        .toLowerCase()
        .replace("-", " ");
      const isValid = DesignData.some((data) =>
        memoizedBasisOfSearchParam === "projectName"
          ? data.projectName.toLowerCase() === formattedValue
          : data.featureName.toLowerCase() === formattedValue
      );

      if (isValid) {
        setIsFiltering({
          basisOf: memoizedBasisOfSearchParam as "projectName" | "featureName",
          value: memoizedIsValueOfSearchParam,
        });
      }

      setTimeout(() => {
        if (anchor.current) {
          anchor.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }
      }, 100);
    }
  }, [
    resetSelection,
    isFiltering,
    memoizedBasisOfSearchParam,
    memoizedIsValueOfSearchParam,
    params,
  ]);

  useEffect(() => {
    if (!isFiltering) {
      setDesignDataState(DesignData);
      return;
    }

    const { basisOf, value } = isFiltering;

    setDesignDataState(
      DesignData.filter((data) =>
        basisOf === "projectName"
          ? data.projectName
              .toLowerCase()
              .includes(value.toLowerCase().replace("-", " "))
          : data.featureName
              .toLowerCase()
              .includes(value.toLowerCase().replace("-", " "))
      )
    );
  }, [isFiltering]);

  return (
    <div className="w-full h-fit flex flex-col items-center justify-start gap-4">
      <div
        className={`${
          isFiltering ? "sticky top-[70px] xl:top-2" : ""
        } w-fit min-w-[300px] bg-brand-background-overlay p-3 px-8 h-fit text-center xl:h-[90px] flex flex-col items-center justify-start gap-2 rounded-md shadow-black shadow-lg z-20`}
      >
        {isFiltering ? (
          <>
            <p className="xl:text-lg text-sm text-white">
              Currently Filtering by{" "}
              <span className="text-brand-primary font-medium">
                {isFiltering.basisOf === "projectName"
                  ? "Project Name"
                  : "Feature Type"}
              </span>{" "}
              for{" "}
              <span className="text-brand-primary font-medium">
                {formatText(isFiltering.value)}
              </span>
            </p>
            <button
              onClick={() => {
                setIsFiltering(null);
                setResetSelection(true);
              }}
              className="p-1 bg-black/50 rounded-sm w-fit h-fit"
            >
              <X className="size-5 text-red-500" strokeWidth={3} />
            </button>
          </>
        ) : (
          <p className="text-white xl:text-lg text-sm">Showing All Results</p>
        )}
      </div>

      <div ref={anchor} className="w-fit h-fit invisible"></div>
      <div
        ref={parent}
        className="w-full min-h-[600px] h-fit grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5"
      >
        {designDataState.map((data) => (
          <DesignCard
            key={data.projectName + data.featureName + data.featureNumber}
            cardData={data}
            setResetSelection={setResetSelection}
          />
        ))}
      </div>
    </div>
  );
}

export function DesignCard({
  cardData,
  setResetSelection,
}: {
  cardData: DesignDataType;
  setResetSelection: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const router = useRouter();
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });

  const handleSearch = (
    basisOf: "projectName" | "featureName",
    value: string
  ) => {
    params.set("basisOf", basisOf);
    params.set("value", value.toLowerCase().replace(" ", "-"));
    window.history.pushState(null, "", `?${params.toString()}`);
    setResetSelection(false);
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="w-full h-full min-h-[300px] xl:min-h-[200px] flex flex-col items-center justify-center">
      <div
        style={{ "--bgColor": cardData.bgColor } as React.CSSProperties}
        className={`${
          isExpanded ? "translate-y-0" : "translate-y-[50%]"
        } w-full h-fit bg-[--bgColor] rounded-md rounded-b-none ease-in-out duration-300 transition-all overflow-hidden`}
      >
        <button
          onClick={() => setIsExpanded(true)}
          className={`${
            isExpanded ? "translate-x-full" : "translate-x-0"
          } transition-all ease-in-out duration-300 delay-300 w-full h-[50%] flex flex-row items-center z-20 justify-between px-2 absolute top-0 left-0`}
        >
          <h2 className="text-white text-lg tracking-wide font-medium truncate">
            {cardData.projectName}
            {" > "}{" "}
            <span className="opacity-60 text-sm">{cardData.featureName}</span>
          </h2>
          <ChevronDown className="size-5 shrink-0 text-white" strokeWidth={3} />
        </button>
        <div className="w-full h-fit flex flex-col items-start justify-start gap-2 p-2 relative">
          <button
            tabIndex={isExpanded ? 0 : -1}
            onClick={() => setIsExpanded(false)}
            className={`${
              isExpanded
                ? "translate-y-0 opacity-100 delay-500"
                : "translate-y-[600px] opacity-0"
            } p-1 bg-black/70 rounded-sm w-fit h-fit absolute top-2 right-2 transition-all ease-in-out duration-500`}
          >
            <X className="size-3 text-red-500" strokeWidth={3} />
          </button>
          <div
            className={`${
              isExpanded
                ? "translate-y-0 opacity-100 delay-300"
                : "translate-y-[600px] opacity-0 "
            } -tracking-tight flex shrink-0 flex-col items-start justify-center relative text-white transition-all ease-in-out duration-[400ms]`}
          >
            <p className="text-xs text-white/60 -mb-2">Project Name</p>
            <h3 className="text-lg text-white line-clamp-1">
              {cardData.projectName}
            </h3>
            <button
              onClick={() => handleSearch("projectName", cardData.projectName)}
              className="p-1 bg-black/50 rounded-sm w-fit h-fit absolute -right-10"
            >
              <Search className="size-3 text-white" strokeWidth={2} />
            </button>
          </div>
          <div
            className={`${
              isExpanded
                ? "translate-y-0 opacity-100"
                : "translate-y-[600px] opacity-0"
            } -tracking-tight flex shrink-0 flex-col items-start justify-center text-white relative transition-all ease-in-out duration-[400ms] delay-[500ms]`}
          >
            <p className="text-xs text-white/60 -mb-2">Design Type</p>
            <h3 className="text-lg text-white line-clamp-1">
              {cardData.featureName}{" "}
              <span className="opacity-60 text-sm">
                {cardData.featureNumber ? `(#${cardData.featureNumber})` : ""}
              </span>
            </h3>
            <button
              onClick={() => handleSearch("featureName", cardData.featureName)}
              className="p-1 bg-black/50 rounded-sm w-fit h-fit absolute -right-10"
            >
              <Search className="size-3 text-white" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
      <div
        onClick={() => setIsExpanded(false)}
        className="w-full shrink-0  aspect-video h-auto flex flex-col items-center justify-center bg-green-500 rounded-md rounded-t-none relative overflow-hidden"
      >
        <Image
          src={cardData.image}
          placeholder="blur"
          fill
          sizes="(min-width: 1280px) 414px, (min-width: 768px) 532px, 100vw"
          onLoad={(e) => {
            setImageDimensions({
              width: e.currentTarget.naturalWidth,
              height: e.currentTarget.naturalHeight,
            });
          }}
          style={{
            objectPosition: cardData.imagePosition,
            aspectRatio: imageDimensions.width / imageDimensions.height,
          }}
          className={`${
            cardData.coverImage ? "object-cover" : "object-fill"
          }  absolute`}
          alt="Hero Image"
        />
      </div>
    </div>
  );
}
