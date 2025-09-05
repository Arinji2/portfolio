import Image from "next/image";
import OverlayWrapper from "@/components/overlayWrapper";

export default async function Tech() {
	return (
		<section className="relative z-[80] flex h-fit w-full flex-row items-center justify-start pb-3 shadow-black shadow-lg md:pb-0">
			<div className="absolute top-0 left-0 h-full w-full">
				<Image
					src="/tech.png"
					fill
					className="absolute object-cover"
					alt="Hero Image"
					sizes="100vw"
					quality={100}
				/>
				<OverlayWrapper opacity={0.5} />
			</div>

			<div className="z-20 flex h-full w-full flex-col items-stretch justify-start gap-3 md:flex-row md:gap-0">
				<OverlayWrapper opacity={0.5} />
				<div className="z-10 flex h-auto w-full shrink-0 flex-col items-center justify-center gap-6 bg-brand-background-primary text-2xl md:w-[250px] md:flex-row md:justify-end md:text-3xl xl:w-[450px] xl:justify-start xl:text-5xl">
					<h2 className="pt-10 text-center font-bold text-brand-primary tracking-title md:pt-0 md:leading-[100px]">
						TECH STACK
					</h2>
					<div className="mr-4 h-[11px] w-[80%] bg-transparent md:h-[80%] md:w-[11px] md:bg-white"></div>
				</div>

				<div className="no-scrollbar z-10 flex h-full w-full min-w-[300px] snap-x snap-proximity flex-row items-center justify-start gap-5 overflow-x-scroll px-10 md:snap-none md:px-0 md:py-8">
					<div className="flex h-fit w-fit flex-row items-center justify-center gap-5 md:flex-col">
						<TechBlock
							name="NEXTJS"
							use="Full-Stack"
							projects={10}
							position="top"
						/>
						<TechBlock
							name="TAILWIND"
							use="Styling"
							projects={10}
							position="bottom"
						/>
					</div>
					<div className="flex h-fit w-fit flex-row items-center justify-center gap-5 md:flex-col">
						<TechBlock
							name="REACT"
							use="Frontend"
							projects={10}
							position="top"
						/>
						<TechBlock
							name="TYPESCRIPT"
							use="Other"
							projects={10}
							position="bottom"
						/>
					</div>
					<div className="flex h-fit w-fit flex-row items-center justify-center gap-5 md:flex-col">
						<TechBlock
							name="GO/GOLANG"
							use="Backend"
							projects={4}
							position="top"
						/>
						<TechBlock
							name="EXPRESS"
							use="Backend"
							projects={4}
							position="bottom"
						/>
					</div>
					<div className="flex h-fit w-fit flex-row items-center justify-center gap-5 md:flex-col">
						<TechBlock
							name="POCKETBASE"
							use="Database"
							projects={5}
							position="top"
						/>
						<TechBlock
							name="PAYLOAD CMS"
							use="Other"
							projects={2}
							position="bottom"
						/>
					</div>
					<div className="flex h-fit w-fit flex-row items-center justify-center gap-5 md:flex-col">
						<TechBlock name="DOCKER" use="Devops" projects={4} position="top" />
						<TechBlock name="BUN" use="Other" projects={2} position="bottom" />
					</div>
					<div className="flex h-fit w-fit flex-row items-center justify-center gap-5 md:flex-col">
						<TechBlock name="HONO" use="Backend" projects={2} position="top" />
						<TechBlock
							name="SUPABASE"
							use="Database"
							projects={2}
							position="bottom"
						/>
					</div>
					<div className="flex h-fit w-fit flex-row items-center justify-center gap-5 md:flex-col">
						<TechBlock
							name="PTERODACTYL"
							use="Other"
							projects={1}
							position="top"
							small={true}
						/>
						<TechBlock
							name="MongoDB"
							use="Database"
							projects={1}
							position="bottom"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

function TechBlock({
	name,
	use,
	projects,
	position,
	small,
}: {
	name: string;
	use:
		| "Frontend"
		| "Backend"
		| "Full-Stack"
		| "Styling"
		| "Database"
		| "Devops"
		| "Other";
	projects: number;
	position?: "top" | "bottom";
	small?: boolean;
}) {
	return (
		<article className="group relative flex h-[400px] w-[300px] shrink-0 snap-center flex-col items-center justify-center gap-5 text-center md:h-[300px] md:w-[370px]">
			<div
				className={`${
					position === "bottom" ? "bg-white md:bg-transparent" : "bg-white"
				} absolute top-0 h-[5px] w-[90%]`}
			></div>
			<h3
				className={`${
					small ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"
				} font-bold text-brand-primary tracking-title`}
			>
				{name}
			</h3>

			<p className="font-bold text-base text-white/70 md:text-lg xl:text-xl">
				{use}
			</p>
			<p className="font-bold text-base text-brand-primary md:text-lg xl:text-xl">
				Projects: {projects}
			</p>

			<div
				className={`${
					position === "top" ? "bg-white md:bg-transparent" : "bg-white"
				} absolute bottom-0 h-[5px] w-[90%]`}
			></div>
		</article>
	);
}
