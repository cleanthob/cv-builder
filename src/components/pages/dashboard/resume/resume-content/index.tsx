"use client";

import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { TransformControls } from "./controls";
import { NavigationHeader } from "./header";
import { ResumeTemplate } from "./templates";

export const ResumeContent = ({
  data,
  title,
}: {
  data: ResumeData;
  title: string;
}) => {
  return (
    <section className="overflow-hidden w-full h-full flex items-center justify-center relative bg-muted dark:bg-background">
      <TransformWrapper
        initialScale={0.5}
        minScale={0.4}
        centerOnInit
        centerZoomedOut
        limitToBounds={false}
      >
        <>
          <NavigationHeader title={title} />
          <TransformControls title={title} />
          <TransformComponent>
            <ResumeTemplate data={data} />
          </TransformComponent>
        </>
      </TransformWrapper>
    </section>
  );
};
