import WidthWrapper from "@/components/widthWrapper";
import { ArrowRight, Mouse } from "lucide-react";
import { Suspense } from "react";
import { FeaturedCard } from "./cards";
import { DesignsSection } from "./cards.client";
import { FeaturedData } from "./data";
import DesignerModal from "./modal";

export function DesignerCTA() {
  return (
    <Suspense fallback={<></>}>
      <DesignerModal>
        <div className="h-fit flex w-[95%]  flex-col items-center justify-start gap-10 py-10">
          <WidthWrapper>
            <div className="w-full h-fit shrink-0  flex flex-col mdn:flex-row items-center justify-start gap-5">
              <h2 className="text-white  text-2xl xl:text-4xl  tracking-wide font-bold">
                <span className="text-brand-primary">1. </span>Featured Projects{" "}
              </h2>
              <div className="w-fit h-fit shrink-0  flex flex-row items-center justify-start">
                <Mouse className="size-5 text-brand-primary" />
                <ArrowRight className="size-5 text-brand-primary animate-slideLeft" />
              </div>
            </div>

            <div className="w-full h-fit px-3 md:min-h-[370px] min-h-[250px]   overflow-y-hidden flex flex-row items-stretch no-scrollbar justify-start overflow-x-auto gap-5 shrink-0">
              {FeaturedData.map((data) => (
                <FeaturedCard key={data.id} cardData={data} />
              ))}
            </div>
            <div className="w-full h-fit shrink-0  flex flex-col xl:flex-row items-center justify-start gap-5">
              <h2 className="text-white  text-2xl xl:text-4xl  tracking-wide font-bold">
                <span className="text-brand-primary">2. </span>All of my Designs{" "}
              </h2>
            </div>

            <DesignsSection />
          </WidthWrapper>
        </div>
      </DesignerModal>
    </Suspense>
  );
}
