import { Palette } from "lucide-react";
import { SectionTitle } from "../../infos-sidebar/section-title";

import { Button } from "@/components/ui/button";
import { cn } from "cn";
import { Controller, useFormContext } from "react-hook-form";
import colors from "tailwindcss/colors";

const keysToIgnore = [
  "current",
  "inherit",
  "currentColor",
  "transparent",
  "black",
  "white",
];
const colorKeys = Object.keys(colors).filter(
  (key) => !keysToIgnore.includes(key),
) as (keyof typeof colors)[];

const themeLabels: Record<ResumeLanguages, string> = {
  portuguese: "Tema",
  english: "Theme",
  spanish: "Tema",
  french: "Thème",
  german: "Thema",
  italian: "Tema",
};

export const ThemeSection = () => {
  const { control, watch } = useFormContext<ResumeData>();
  const selectedLanguage = watch("structure.language") ?? "portuguese";

  return (
    <div>
      <SectionTitle title={themeLabels[selectedLanguage]} icon={Palette} />
      <Controller
        control={control}
        name="structure.colorTheme"
        render={({ field }) => (
          <div className="grid grid-cols-7 gap-4 mt-4">
            {colorKeys.map((colorKey) => {
              const isSelected = field.value === colorKey;
              return (
                <Button
                  key={colorKey}
                  variant="ghost"
                  className={cn(
                    "w-7 h-7 p-1 rounded-full transition-all",
                    isSelected && "ring-2 ring-foreground",
                  )}
                  onClick={() => field.onChange(colorKey)}
                >
                  <div
                    className="w-full h-full rounded-full"
                    style={{ backgroundColor: colors[colorKey][500] }}
                  ></div>
                </Button>
              );
            })}
          </div>
        )}
      />
    </div>
  );
};
