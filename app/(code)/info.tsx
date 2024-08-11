import { Code } from "bright";
import { Suspense } from "react";
import { AllCodeData } from "./data";
import { GlobalInfoContextWrapper, InfoContextWrapper } from "./info-context";
import { InfoContent, InfoWrapper } from "./info.client";
import CodeModal from "./modal";

export function DeveloperCTA() {
  return (
    <Suspense fallback={<></>}>
      <CodeModal>
        <div className="h-fit flex w-[95%]  flex-col items-center justify-start gap-10 py-10">
          <GlobalInfoContextWrapper>
            {AllCodeData.map((info, index) => (
              <InfoContextWrapper key={index}>
                <InfoWrapper index={index + 1}>
                  <Code
                    lineNumbers
                    className="w-full xl:w-fit shrink-0  tracking-normal max-w-[630px]"
                    lang="tsx"
                  >
                    {info.code}
                  </Code>
                  <InfoContent index={(index + 1).toString()} info={info} />
                </InfoWrapper>
              </InfoContextWrapper>
            ))}
          </GlobalInfoContextWrapper>
        </div>
      </CodeModal>
    </Suspense>
  );
}
