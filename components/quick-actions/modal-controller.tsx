"use client";

import { XCircle } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export default function ModalController() {
  const [hasModalsOpen, setHasModalsOpen] = useState(false);
  const searchParams = useSearchParams();

  const memoizedSearchParams = useMemo(() => {
    if (
      searchParams.get("developer") === "true" ||
      searchParams.get("designer") === "true"
    ) {
      return true;
    } else {
      return false;
    }
  }, [searchParams]);

  useEffect(() => {
    if (memoizedSearchParams) {
      setHasModalsOpen(true);
    } else {
      setHasModalsOpen(false);
    }
  }, [memoizedSearchParams]);

  return (
    <div className="w-fit h-fit fixed top-0 left-0 flex flex-row items-center justify-end z-[200] p-3">
      <div
        className={`${
          hasModalsOpen ? "opacity-100" : "opacity-0"
        } w-fit h-fit flex flex-row items-stretch justify-center p-3 bg-black/50 backdrop-blur-sm rounded-md `}
      >
        <Link tabIndex={hasModalsOpen ? 0 : -1} href={"/"}>
          <XCircle className="size-5 md:size-8 text-red-500" />
        </Link>
      </div>
    </div>
  );
}
