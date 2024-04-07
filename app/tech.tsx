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

      <div className="w-full  h-full flex flex-col md:flex-row items-stretch  justify-start  z-20">
        <OverlayWrapper opacity={0.5} />
        <div className="bg-brand-background-primary shrink-0 h-auto w-full md:w-[250px] xl:w-[450px] flex flex-col md:flex-row items-center justify-center md:justify-end gap-6 xl:justify-start z-10">
          <h2 className="text-[40px] md:text-[50px] xl:text-[70px] text-brand-primary font-bold text-center">
            Tech Stack
          </h2>
          <div className="h-[11px] md:h-[80%] w-[80%] md:w-[11px] bg-transparent md:bg-white mr-4"></div>
        </div>

        <div className="w-full min-w-[300px] snap-x snap-proximity md:py-8 gap-5 h-full flex flex-row items-center no-scrollbar justify-start overflow-x-scroll z-10">
          <div className="w-fit h-fit flex flex-row   gap-5 md:flex-col items-center justify-center">
            <TechBlock
              name="nextjs"
              description="A react framework for creating modern applications"
              projects={10}
              position="top"
            />
            <TechBlock
              name="tailwind"
              description="Tailwind is a utility-first CSS framework for building modern websites"
              projects={7}
              position="bottom"
            />
          </div>
          <div className="w-fit h-fit flex flex-row gap-5 md:flex-col items-center justify-center">
            <TechBlock
              name="react"
              description="React is the javascript library for web and native user interfaces."
              projects={7}
              position="top"
            />
            <TechBlock
              name="typescript"
              description="TypeScript is a strongly typed JavaScript with syntax for types."
              projects={7}
              position="bottom"
            />
          </div>
          <div className="w-fit h-fit flex flex-row gap-5 md:flex-col items-center justify-center">
            <TechBlock
              name="pocketbase"
              description="PocketBase is an open source backend in 1 executable file"
              projects={5}
              position="top"
            />
            <TechBlock
              name="express"
              description="Express is a minimal and flexible Node.js web APP framework "
              projects={4}
              position="bottom"
            />
          </div>
          <div className="w-fit h-fit flex flex-row gap-5 md:flex-col items-center justify-center">
            <TechBlock
              name="docker"
              description="lightweight, secure and standalone containers to deploy applications "
              projects={4}
              position="top"
            />
            <TechBlock
              name="bun"
              description="Bun is a JavaScript runtime written in the Zig programming language."
              projects={2}
              position="bottom"
            />
          </div>
          <div className="w-fit h-fit flex flex-row gap-5 md:flex-col items-center justify-center">
            <TechBlock
              name="hono"
              description="Hono is a small, simple, and ultrafast web framework for the Edges."
              projects={2}
              position="top"
            />
            <TechBlock
              name="supabase"
              description="An open source baas, using postgress. Comes with auth and storage."
              projects={2}
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
  description,
  projects,
  position,
}: {
  name: string;
  description: string;
  projects: number;
  position?: "top" | "bottom";
}) {
  return (
    <article
      tabIndex={0}
      className="w-[300px]   md:w-[370px] relative shrink-0 md:h-[300px] h-[400px] flex flex-col items-center justify-center gap-5 text-center"
    >
      <div
        className={`${
          position === "bottom" ? "bg-white md:bg-transparent " : "bg-white "
        }  w-[90%] h-[5px] absolute top-0`}
      ></div>
      <h3 className="text-[30px] md:text-[40px] text-brand-primary font-bold">
        {name}
      </h3>
      <div className="w-[90%] h-fit flex flex-col items-center justify-center text-center ">
        <p className="text-white text-[15px] md:text-[20px] my-5">
          {description}
        </p>
        <p className="text-[15px] md:text-[20px] font-bold text-brand-primary">
          Projects: {projects}
        </p>
      </div>
      <div
        className={`${
          position === "top" ? "bg-white md:bg-transparent " : "bg-white "
        }w-[90%] h-[5px] absolute bottom-0`}
      ></div>
    </article>
  );
}
