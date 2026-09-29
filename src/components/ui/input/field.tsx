import { ComponentProps, ReactNode } from "react";
import {
  Control,
  Controller,
  FieldPath,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import { Input } from ".";
import { FieldWrapper } from "../field-wrapper";

type InputFieldProps<TFieldValues extends FieldValues = FieldValues> =
  ComponentProps<typeof Input> & {
    label: string;
    name: FieldPath<TFieldValues>;
    containerClassName?: string;
    extraContent?: (value: string) => ReactNode;
    control?: Control<TFieldValues>;
  };

export const InputField = <TFieldValues extends FieldValues = FieldValues>({
  label,
  name,
  required,
  containerClassName,
  extraContent,
  control: customControl,
  ...props
}: InputFieldProps<TFieldValues>) => {
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
          <Input
            {...props}
            {...field}
            value={field.value ?? ""}
            onChange={(event) => field.onChange(event.target.value)}
            onBlur={field.onBlur}
            ref={field.ref}
          />
          {extraContent && extraContent(field.value ?? "")}
        </FieldWrapper>
      )}
    />
  );
};
