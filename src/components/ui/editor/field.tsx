import {
  Control,
  Controller,
  FieldPath,
  FieldValues,
  useFormContext,
} from "react-hook-form";

import { Editor } from ".";
import { FieldWrapper } from "../field-wrapper";

type EditorFieldProps<TFieldValues extends FieldValues = FieldValues> = {
  label: string;
  name: FieldPath<TFieldValues>;
  containerClassName?: string;
  required?: boolean;
  className?: string;
  control?: Control<TFieldValues>;
};

export const EditorField = <TFieldValues extends FieldValues = FieldValues>({
  label,
  name,
  required,
  containerClassName,
  control: customControl,
  ...props
}: EditorFieldProps<TFieldValues>) => {
  const { control } = useFormContext<TFieldValues>();
  return (
    <Controller
      control={customControl ?? control}
      name={name}
      rules={{ required: required && "Campo obrigatório" }}
      render={({ field, fieldState }) => (
        <FieldWrapper
          label={label}
          className={containerClassName}
          error={fieldState?.error}
        >
          <Editor {...props} {...field} />
        </FieldWrapper>
      )}
    />
  );
};
