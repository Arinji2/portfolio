import WidthWrapper from "@/components/widthWrapper";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons/faDiscord";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Form } from "./form";

export default async function Contact() {
  return (
    <section
      tabIndex={0}
      className="w-full relative h-[100svh] flex flex-col items-center justify-start py-5 px-2"
    >
      <WidthWrapper transparent>
        <div className="w-full xl:w-[90%] h-full flex flex-col items-start justify-start z-20">
          <h2 className="text-brand-primary font-bold text-center md:text-left text-[60px] nd:text-[80px] xl:text-[100px]">
            Contact Me!
          </h2>
          <div className="w-full  md:w-[95%] h-fit flex-nowrap flex flex-row items-center justify-center md:justify-start  gap-12">
            <Link
              href="https://www.github.com/Arinji2"
              target="_blank"
              aria-label="Github Link"
              className="w-[90px] h-[90px] flex flex-col items-center justify-center gap-1"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="w-full h-full text-white"
              />
            </Link>
            <Link
              href="https://discord.com/users/890486507872342027"
              target="_blank"
              aria-label="Discord Link"
              className="w-[90px] h-[90px] flex flex-col items-center justify-center gap-1"
            >
              <FontAwesomeIcon
                icon={faDiscord}
                className="w-full h-full text-white"
              />
            </Link>
          </div>
          <div className="h-full w-full flex flex-col items-center justify-center mt-10">
            <Form />
          </div>
        </div>
      </WidthWrapper>
    </section>
  );
}