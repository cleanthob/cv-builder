import { Languages } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";
import { SectionTitle } from "../../infos-sidebar/section-title";

type LanguageOption = {
  label: string;
  value: ResumeLanguages;
};

const labelsByLanguage: Record<
  ResumeLanguages,
  Record<ResumeLanguages, string>
> = {
  portuguese: {
    portuguese: "Português",
    english: "Inglês",
    spanish: "Espanhol",
    french: "Francês",
    german: "Alemão",
    italian: "Italiano",
  },
  english: {
    portuguese: "Portuguese",
    english: "English",
    spanish: "Spanish",
    french: "French",
    german: "German",
    italian: "Italian",
  },
  spanish: {
    portuguese: "Portugués",
    english: "Inglés",
    spanish: "Español",
    french: "Francés",
    german: "Alemán",
    italian: "Italiano",
  },
  french: {
    portuguese: "Portugais",
    english: "Anglais",
    spanish: "Espagnol",
    french: "Français",
    german: "Allemand",
    italian: "Italien",
  },
  german: {
    portuguese: "Portugiesisch",
    english: "Englisch",
    spanish: "Spanisch",
    french: "Französisch",
    german: "Deutsch",
    italian: "Italienisch",
  },
  italian: {
    portuguese: "Portoghese",
    english: "Inglese",
    spanish: "Spagnolo",
    french: "Francese",
    german: "Tedesco",
    italian: "Italiano",
  },
};

const sectionTitles: Record<ResumeLanguages, string> = {
  portuguese: "Linguagem",
  english: "Language",
  spanish: "Idioma",
  french: "Langue",
  german: "Sprache",
  italian: "Lingua",
};

const placeholders: Record<ResumeLanguages, string> = {
  portuguese: "Selecione uma linguagem",
  english: "Select a language",
  spanish: "Seleccione un idioma",
  french: "Sélectionnez une langue",
  german: "Sprache auswählen",
  italian: "Seleziona una lingua",
};

export const languagesOptions: LanguageOption[] = [
  { label: "Inglês", value: "english" },
  { label: "Espanhol", value: "spanish" },
  { label: "Francês", value: "french" },
  { label: "Alemão", value: "german" },
  { label: "Italiano", value: "italian" },
  { label: "Português", value: "portuguese" },
];

export const LanguageSection = () => {
  const { control, watch } = useFormContext<ResumeData>();
  const selectedLanguage = watch("structure.language") ?? "portuguese";

  return (
    <div>
      <SectionTitle title={sectionTitles[selectedLanguage]} icon={Languages} />
      <Controller
        control={control}
        name="structure.language"
        render={({ field }) => {
          const currentValue = field.value ?? "portuguese";

          return (
            <select
              {...field}
              value={currentValue}
              onChange={(event) =>
                field.onChange(event.target.value as ResumeLanguages)
              }
              className="mt-4 w-full rounded-md border border-input bg-background px-3 py-2 text-xs text-foreground outline-none focus:ring-2 focus:ring-ring"
            >
              {languagesOptions.map((language) => (
                <option key={language.value} value={language.value}>
                  {labelsByLanguage[selectedLanguage][language.value]}
                </option>
              ))}
            </select>
          );
        }}
      />
    </div>
  );
};
