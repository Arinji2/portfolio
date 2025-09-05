import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons/faDiscord";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import WidthWrapper from "@/components/widthWrapper";
import { Form } from "./form";

export default async function Contact() {
	return (
		<section className="relative flex h-fit w-full flex-col items-center justify-center px-2 py-5">
			<WidthWrapper transparent>
				<div className="z-20 flex h-full w-full flex-col items-center justify-start gap-10 xl:w-[90%]">
					<h2 className="font-bold text-2xl text-brand-primary tracking-title md:text-3xl xl:text-5xl">
						CONTACT ME!
					</h2>
					<div className="mt-6 flex h-fit w-full flex-row flex-nowrap items-center justify-center gap-12 md:w-[95%]">
						<Link
							href="https://www.github.com/Arinji2"
							target="_blank"
							aria-label="Github Link"
							className="flex h-[45px] w-[45px] flex-col items-center justify-center gap-1 md:h-[90px] md:w-[90px]"
						>
							<FontAwesomeIcon
								icon={faGithub}
								className="h-full w-full text-white"
							/>
						</Link>
						<Link
							href="https://discord.com/users/890486507872342027"
							target="_blank"
							aria-label="Discord Link"
							className="flex h-[45px] w-[45px] flex-col items-center justify-center gap-1 md:h-[90px] md:w-[90px]"
						>
							<FontAwesomeIcon
								icon={faDiscord}
								className="h-full w-full text-white"
							/>
						</Link>
					</div>
					<div className="mt-10 flex h-full w-full flex-col items-center justify-center">
						<Form />
					</div>
				</div>
			</WidthWrapper>
		</section>
	);
}
