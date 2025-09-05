import Image from "next/image";
import Link from "next/link";
import OverlayWrapper from "@/components/overlayWrapper";
import WidthWrapper from "@/components/widthWrapper";
import { DeveloperCTA } from "./(code)/info";
import { DesignerCTA } from "./(designer)/info";

export default function Hero() {
	return (
		<>
			<DeveloperCTA />
			<DesignerCTA />

			<section className="relative flex h-[100svh] w-full flex-col items-center justify-center shadow-black shadow-lg xl:justify-start">
				<Image
					src="/hero.png"
					fill
					className="absolute object-cover"
					alt="Hero Image"
					priority
					sizes="100vw"
					quality={100}
				/>
				<OverlayWrapper opacity={0.5} />
				<WidthWrapper transparent>
					<div className="z-20 flex h-fit w-full flex-col items-center justify-center gap-5 xl:w-[90%] xl:items-start xl:justify-start xl:gap-y-20">
						<h1 className="font-bold text-4xl text-white tracking-title md:text-5xl xl:text-7xl">
							HELLO!
						</h1>
						<div className="flex h-full w-full flex-col items-end justify-start">
							<div className="flex h-full w-full flex-col items-center justify-start gap-y-10 md:gap-y-28 xl:w-[90%] xl:items-start">
								<h2 className="text-lg text-white md:text-2xl xl:text-4xl">
									I am <span className="text-brand-primary">ARINJAY DHAR</span>
								</h2>
								<div className="flex h-fit w-full flex-col items-center justify-center gap-8 md:flex-row xl:justify-start">
									<Link
										prefetch={true}
										href={"?developer=true"}
										className="relative flex h-fit w-[250px] flex-col items-center justify-center bg-brand-purple bg-opacity-60 py-2"
									>
										<div className="-top-2 -right-2 absolute size-4 animate-pulse rounded-full bg-green-500"></div>
										<p className="text-base text-white tracking-button md:text-lg xl:text-xl">
											DEVELOPER
										</p>
									</Link>
									<Link
										prefetch={true}
										href={"?designer=true"}
										className="relative flex h-fit w-[250px] flex-col items-center justify-center bg-brand-red bg-opacity-60 py-2"
									>
										<div className="-top-2 -right-2 absolute size-4 animate-pulse rounded-full bg-green-500"></div>
										<p className="text-base text-white tracking-button md:text-lg xl:text-xl">
											DESIGNER
										</p>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</WidthWrapper>
			</section>
		</>
	);
}
