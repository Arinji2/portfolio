import WidthWrapper from "@/components/widthWrapper";
import Image from "next/image";

export default async function Freelance() {
  return (
    <section className="w-full  relative h-fit pb-10 mt-10 flex flex-row items-center justify-start">
      <WidthWrapper color="">
        <div className="w-full h-full flex flex-col  items-center justify-start  z-20">
          <div className=" md:pl-10 shrink-0 h-fit w-[95%]  xl:w-full  flex flex-row items-center  gap-3 justify-center md:justify-start z-10">
            <h2 className="text-[30px] md:text-[50px] xl:text-[70px] text-white font-bold xl:text-left text-center">
              Let&apos;s Build The,
              <br />
              <span className="text-brand-primary">Next Big Thing.</span>
            </h2>
          </div>
          <div className="w-[95%] xl:w-full gap-5 md:pl-10  h-full flex flex-row items-start pt-10 px-1 md:px-0 small-scrollbar justify-start overflow-x-scroll z-50">
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
    <section
      tabIndex={0}
      className=" w-[300px] md:w-[400px] px-4 py-6 bg-brand-background-secondary shadow-[-5px_4px_4px_0px_#000] rounded-md relative shrink-0  h-[350px] flex flex-col items-start justify-start gap-8"
    >
      <div className="w-full h-[60%] flex flex-col items-start justify-start text-left">
        <p className="text-white text-[15px] tracking-wider">{description}</p>
      </div>
      <div className="w-full h-[40%] flex flex-col items-start justify-start text-left gap-2">
        <div className="w-[90%] h-[2px] bg-white"></div>
        <div className="w-[90%] h-full flex flex-row items-end justify-between">
          <div className="w-full md:w-fit h-fit flex flex-col items-start justify-start gap-1">
            <p className="text-[30px] font-bold text-brand-primary">{name}</p>
            <div className="w-full h-full flex flex-col items-start text-left justify-center gap-1">
              <p className="text-[10px] md:text-[15px] text-white">{post}</p>
              <div className="w-full h-[2px] bg-white"></div>
            </div>
          </div>
          <div className="h-full w-fit flex flex-col items-center justify-start pt-5">
            <div className="w-[50px] h-[50px] rounded-full relative overflow-hidden shadow-[-2px_0px_0px_0px_#66FCE1]">
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
