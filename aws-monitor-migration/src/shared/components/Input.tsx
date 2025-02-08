import { TextFieldProps } from "@mui/material"
import { Path, FieldValues } from "react-hook-form"

interface InputProps<TFieldValues extends FieldValues>
  extends Omit<TextFieldProps, "name"> {
  name: Path<TFieldValues>
}
const Input = <TFieldValues extends FieldValues>({
  name,
  ...props
}: InputProps<TFieldValues>) => {}

const wow = () => {
  return <div></div>
}
