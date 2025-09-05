import Image from "next/image";
import OverlayWrapper from "@/components/overlayWrapper";
import WidthWrapper from "@/components/widthWrapper";

export default async function About() {
	return (
		<section className="relative z-[90] flex h-auto w-full flex-row items-stretch justify-end shadow-black shadow-lg md:justify-center xl:h-[100svh] xl:items-center">
			<div className="relative hidden w-[30%] md:block xl:h-full">
				<Image
					src="/about-pc.png"
					fill
					className="absolute object-cover"
					alt="About PC Image"
					sizes="30vw"
					quality={100}
				/>
				<OverlayWrapper opacity={0.5} />
			</div>
			<div className="relative z-20 flex h-full w-[70%] flex-col items-center justify-start md:w-[40%]">
				<WidthWrapper color="#6D6D6D">
					<div className="flex h-full w-full flex-col items-center justify-center gap-6 py-3 xl:gap-0 xl:py-0">
						<div className="flex h-[30%] w-full flex-col items-center justify-center p-2 text-center">
							<p className="text-white text-xs tracking-tight md:text-lg xl:text-2xl">
								I am a UI/UX designer and developer from India, born in America.
							</p>
						</div>
						<div
							className="flex h-[5%] w-full flex-col items-center justify-center xl:pb-2"
							aria-hidden
						>
							<div className="h-1 w-[75%] bg-white/20 md:h-3 md:bg-white"></div>
						</div>
						<div className="flex w-full flex-col items-center justify-center p-2 text-center xl:my-4 xl:h-[30%]">
							<h2 className="font-bold text-2xl text-brand-primary tracking-title md:text-3xl xl:text-5xl">
								ABOUT ME
							</h2>
						</div>
						<div
							className="flex h-[5%] w-full flex-col items-center justify-center xl:pt-2"
							aria-hidden
						>
							<div className="h-1 w-[75%] bg-white/20 md:h-3 md:bg-white"></div>
						</div>
						<div className="flex h-[30%] w-full flex-col items-center justify-center p-2 text-center">
							<p className="text-white text-xs tracking-tight md:text-lg xl:text-2xl">
								I am {new Date().getFullYear() - 2007} years old, and started
								coding at the age of 14. I love making things on my own and
								learning through projects.
							</p>
						</div>
					</div>
				</WidthWrapper>
			</div>

			<div className="absolute h-full w-full md:relative md:h-auto md:w-[30%] xl:h-full">
				<Image
					src="/about.png"
					fill
					className="absolute object-cover md:object-left"
					alt="About Image"
					priority
					sizes="(min-width: 768px) 30vw, 100vw"
					quality={100}
				/>
				<OverlayWrapper opacity={0.5} />
			</div>
		</section>
	);
}
