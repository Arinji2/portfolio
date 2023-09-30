import FooterWrapper from "@/components/footerWrapper";
import OverlayWrapper from "@/components/overlayWrapper";
import Image from "next/image";

export default async function Tech() {
  return (
    <section
      tabIndex={0}
      className="w-full relative h-[100svh] flex flex-row items-center justify-start"
    >
      <div className="h-[100svh] w-full absolute top-0 left-0">
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

      <div className="w-full h-full flex flex-col md:flex-row items-center justify-start  z-20">
        <OverlayWrapper opacity={0.5} />
        <div className="bg-brand-background-primary shrink-0 h-[200px] md:h-full w-full md:w-[250px] xl:w-[450px] flex flex-col md:flex-row items-center justify-center md:justify-end gap-6 xl:justify-start z-10">
          <h2 className="text-[40px] md:text-[50px] xl:text-[70px] text-brand-primary font-bold text-center">
            Tech Stack
          </h2>
          <div className="h-[11px] md:h-[80%] w-[80%] md:w-[11px] bg-white mr-4"></div>
        </div>
        <div className="w-full min-w-[300px] gap-5 h-full flex flex-row items-center no-scrollbar justify-start overflow-x-scroll z-10">
          <TechBlock
            name="NEXTJS"
            description="A react framework for creating modern applications"
            projects={5}
          />
          <TechBlock
            name="Tailwind"
            description="Tailwind is a utility-first CSS framework for building modern websites"
            projects={7}
          />
          <TechBlock
            name="supabase"
            description="An open source baas, using postgress. Comes with auth and storage."
            projects={5}
          />
          <TechBlock
            name="express"
            description="Express is a minimal and flexible Node.js web APP framework "
            projects={2}
          />
          <TechBlock
            name="docker"
            description="lightweight, secure and standalone containers to deploy applications "
            projects={2}
          />
        </div>
      </div>

      <FooterWrapper />
    </section>
  );
}

function TechBlock({
  name,
  description,
  projects,
}: {
  name: string;
  description: string;
  projects: number;
}) {
  return (
    <article className="w-[300px] md:w-[370px] relative shrink-0 h-[400px] flex flex-col items-center justify-center gap-5 text-center">
      <div className="w-[90%] h-[5px] bg-white absolute top-0"></div>
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
      <div className="w-[90%] h-[5px] bg-white absolute bottom-0"></div>
    </article>
  );
}
