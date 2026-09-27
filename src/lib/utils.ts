export { cn } from "cn";
import colors from "tailwindcss/colors";

export const sectionIsEmpty = (
  section: ResumeSections,
  data: ResumeContentData,
) => {
  switch (section) {
    case "summary":
      return data.summary === "" || data.summary === "<p></p>";
    default:
      return data[section].length === 0;
  }
};

export const formatTailwindHTML = (
  html: string,
  structure: ResumeStructureData,
) => {
  const colorKey = structure.colorTheme as keyof typeof colors;
  return `<html>

  <head>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              "resume-primary": "var(--resume-primary)",
            },
          },
        },
      }
    </script>
    <style>
      :root { --resume-primary: ${colors[colorKey][500]}; }
    </style>
  </head>

  <body>
  ${html}
  </body>
  
  </html>`;
};
