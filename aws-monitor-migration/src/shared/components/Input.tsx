import { TextFieldProps } from "@mui/material"
import { Path, FieldValues, useFormContext, Controller } from "react-hook-form"
import InputTextField from "./InputTextField"

interface InputProps<TFieldValues extends FieldValues>
  extends Omit<TextFieldProps, "name"> {
  name: Path<TFieldValues>
}
const Input = <TFieldValues extends FieldValues>({
  name,
  ...props
}: InputProps<TFieldValues>) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <InputTextField
          {...props}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          error={!!error}
          helperText={error?.message}
          data-testid={`${name}-input`}
        />
      )}
    />
  )
}

export default Input
