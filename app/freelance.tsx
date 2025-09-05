import Image from "next/image";
import WidthWrapper from "@/components/widthWrapper";

export default async function Freelance() {
	return (
		<section className="relative mt-10 flex h-fit w-full flex-row items-center justify-start pb-10">
			<WidthWrapper color="">
				<div className="z-20 flex h-full w-full flex-col items-center justify-start">
					<div className="z-10 flex h-fit w-[95%] shrink-0 flex-row items-center justify-center gap-3 md:justify-start md:pl-10 xl:w-full">
						<h2 className="font-bold text-2xl text-white tracking-title md:text-3xl xl:text-5xl">
							Let&apos;s Build The,
							<br />
							<span className="text-brand-primary">Next Big Thing.</span>
						</h2>
					</div>
					<div className="small-scrollbar z-50 flex h-full w-[95%] flex-row items-start justify-start gap-5 overflow-x-auto px-1 pt-10 md:px-0 md:pl-10 xl:w-full">
						<FreelanceBlock
							name="Antonio"
							description="Committed and dedicated team member. In the short time he has been with our team, he has consistently exceeded our expectations by developing unique and customized enhancements."
							post="CEO of Revivenode"
							icon="revive.webp"
						/>
						<FreelanceBlock
							name="Duh"
							description="Arinji works hard and gets the job done on time, I initially had him join to fix up a site, he encouraged me to redesign and recode, he’s done all of that in a month."
							post="CEO of Feds.lol"
							icon="feds.webp"
						/>
						<FreelanceBlock
							name="Wiscers"
							description="Arinji was an absolute pleasure to work with. exceeded my expectations and very easy going."
							post="Owner of Vanilla Earth"
							icon="ve.webp"
						/>
					</div>
				</div>
			</WidthWrapper>
		</section>
	);
}

function FreelanceBlock({
	name,
	description,
	post,

	icon,
}: {
	name: string;
	description: string;
	post: string;
	icon: string;
}) {
	return (
		<section className="relative flex h-[350px] w-[300px] shrink-0 flex-col items-start justify-start gap-8 rounded-md bg-brand-background-secondary px-4 py-6 shadow-[-5px_4px_4px_0px_#000] md:w-[400px]">
			<div className="flex h-[60%] w-full flex-col items-start justify-start text-left">
				<p className="text-white text-xs tracking-wide md:text-sm">
					{description}
				</p>
			</div>
			<div className="flex h-[40%] w-full flex-col items-start justify-start gap-2 text-left">
				<div className="h-[2px] w-[90%] bg-white"></div>
				<div className="flex h-full w-[90%] flex-row items-end justify-between">
					<div className="flex h-fit w-full flex-col items-start justify-start gap-1 md:w-fit">
						<p className="font-bold text-brand-primary md:text-lg xl:text-xl">
							{name}
						</p>
						<div className="flex h-full w-full flex-col items-start justify-center gap-1 text-left">
							<p className="text-[10px] text-white md:text-[15px]">{post}</p>
							<div className="h-[2px] w-full bg-white"></div>
						</div>
					</div>
					<div className="flex h-full w-fit flex-col items-center justify-start pt-5">
						<div className="relative h-[50px] w-[50px] overflow-hidden rounded-full shadow-[-2px_0px_0px_0px_#66FCE1]">
							<Image
								alt={name}
								src={`/testimonials/${icon}`}
								fill
								sizes="50px"
								quality={100}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
