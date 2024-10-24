import OverlayWrapper from "@/components/overlayWrapper";
import Image from "next/image";

export default async function Tech() {
  return (
    <section
      tabIndex={0}
      className="w-full relative h-fit  flex flex-row items-center justify-start pb-3 md:pb-0 z-[80] shadow-lg shadow-black"
    >
      <div className="h-full w-full absolute top-0 left-0">
        <Image
          src="/tech.png"
          fill
          className="object-cover absolute"
          alt="Hero Image"
          sizes="100vw"
          quality={100}
        />
        <OverlayWrapper opacity={0.5} />
      </div>

      <div className="w-full  h-full flex flex-col md:flex-row items-stretch gap-3 md:gap-0 justify-start  z-20">
        <OverlayWrapper opacity={0.5} />
        <div className="bg-brand-background-primary xl:text-5xl md:text-3xl text-2xl shrink-0 h-auto w-full md:w-[250px] xl:w-[450px] flex flex-col md:flex-row items-center justify-center md:justify-end gap-6 xl:justify-start z-10">
          <h2 className="text-brand-primary  md:leading-[100px] tracking-title font-bold text-center pt-10 md:pt-0 ">
            TECH STACK
          </h2>
          <div className="h-[11px] md:h-[80%] w-[80%] md:w-[11px] bg-transparent md:bg-white mr-4"></div>
        </div>

        <div className="w-full min-w-[300px] snap-x md:snap-none px-10 md:px-0 snap-proximity md:py-8 gap-5 h-full flex flex-row items-center no-scrollbar justify-start overflow-x-scroll z-10">
          <div className="w-fit h-fit flex flex-row  gap-5 md:flex-col items-center justify-center">
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
          <div className="w-fit h-fit flex flex-row gap-5 md:flex-col items-center justify-center">
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
          <div className="w-fit h-fit flex flex-row gap-5 md:flex-col items-center justify-center">
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
          <div className="w-fit h-fit flex flex-row gap-5 md:flex-col items-center justify-center">
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
          <div className="w-fit h-fit flex flex-row gap-5 md:flex-col items-center justify-center">
            <TechBlock name="DOCKER" use="Devops" projects={4} position="top" />
            <TechBlock name="BUN" use="Other" projects={2} position="bottom" />
          </div>
          <div className="w-fit h-fit flex flex-row gap-5 md:flex-col items-center justify-center">
            <TechBlock name="HONO" use="Backend" projects={2} position="top" />
            <TechBlock
              name="SUPABASE"
              use="Database"
              projects={2}
              position="bottom"
            />
          </div>
          <div className="w-fit h-fit flex flex-row gap-5 md:flex-col items-center justify-center">
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
    <article
      tabIndex={0}
      className="w-[300px] group  md:w-[370px] snap-center relative shrink-0 md:h-[300px] h-[400px] flex flex-col items-center justify-center gap-5 text-center"
    >
      <div
        className={`${
          position === "bottom" ? "bg-white md:bg-transparent " : "bg-white "
        }  w-[90%] h-[5px] absolute top-0`}
      ></div>
      <h3
        className={`${
          small ? " md:text-2xl text-xl " : "md:text-3xl text-2xl "
        } tracking-title text-brand-primary font-bold`}
      >
        {name}
      </h3>

      <p className=" md:text-lg text-base xl:text-xl font-bold text-white/70">
        {use}
      </p>
      <p className=" md:text-lg text-base xl:text-xl  font-bold text-brand-primary">
        Projects: {projects}
      </p>

      <div
        className={`${
          position === "top" ? "bg-white md:bg-transparent " : "bg-white "
        }w-[90%] h-[5px] absolute bottom-0`}
      ></div>
    </article>
  );
}
