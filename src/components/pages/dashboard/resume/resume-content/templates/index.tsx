import React, { useMemo } from "react";
import colors from "tailwindcss/colors";
import { Ditto } from "./ditto";
import { Eevee } from "./eevee";
import { Jynx } from "./jynx";
import { Onix } from "./onix";

export type BaseResumeProps = {
  data: ResumeData;
};

type ResumeTemplateProps = {
  data: ResumeData;
};

const templatesMap: Record<ResumeTemplates, React.FC<BaseResumeProps>> = {
  ditto: Ditto,
  eevee: Eevee,
  jynx: Jynx,
  onix: Onix,
};

export const ResumeTemplate = ({ data }: ResumeTemplateProps) => {
  const template = data.structure.template;
  const colorTheme = data.structure.colorTheme as keyof typeof colors;

  const Resume = useMemo(() => {
    return templatesMap[template];
  }, [template]);

  return (
    <div
      id="resume-content"
      className="w-[210mm] min-h-[297mm] bg-white text-black font-arial [&_hr]:border-black"
      style={
        { "--resume-primary": colors[colorTheme][500] } as React.CSSProperties
      }
    >
      <Resume data={data} />
    </div>
  );
};
