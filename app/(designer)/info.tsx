import { ArrowRight, Mouse } from "lucide-react";
import { Suspense } from "react";
import WidthWrapper from "@/components/widthWrapper";
import { FeaturedCard } from "./cards";
import { DesignsSection } from "./cards.client";
import { FeaturedData } from "./data";
import DesignerModal from "./modal";

export function DesignerCTA() {
	return (
		<Suspense fallback={<></>}>
			<DesignerModal>
				<div className="flex h-fit w-[95%] flex-col items-center justify-start gap-10 py-10">
					<WidthWrapper>
						<div className="flex h-fit w-full shrink-0 flex-col items-center justify-start gap-5 md:flex-row">
							<h2 className="font-bold text-lg text-white tracking-title tracking-wide md:text-xl xl:text-2xl">
								<span className="text-brand-primary">1. </span>Featured Projects{" "}
							</h2>
							<div className="flex h-fit w-fit shrink-0 flex-row items-center justify-start">
								<Mouse className="size-5 text-brand-primary" />
								<ArrowRight className="size-5 animate-slideLeft text-brand-primary" />
							</div>
						</div>

						<div className="no-scrollbar flex h-fit min-h-[250px] w-full shrink-0 flex-row items-stretch justify-start gap-5 overflow-x-auto overflow-y-hidden px-3 pt-5 md:min-h-[420px]">
							{FeaturedData.map((data) => (
								<FeaturedCard key={data.id} cardData={data} />
							))}
						</div>
						<div className="flex h-fit w-full shrink-0 flex-col items-center justify-start gap-5 pt-5 xl:flex-row">
							<h2 className="font-bold text-lg text-white tracking-title tracking-wide md:text-xl xl:text-2xl">
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
