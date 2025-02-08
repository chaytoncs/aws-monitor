import { styled, TextField } from "@mui/material"

const InputTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    color: theme.palette.custom.seasalt,
    backgroundColor: theme.palette.custom.oxfordBlue,
    "& fieldset": {
      borderColor: theme.palette.custom.spaceCadet,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.custom.skyBlue,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.custom.skyBlue,
    },
  },
  "& .MuiInputLabel-root": {
    color: theme.palette.custom.seasalt,
    "&.Mui-focused": {
      color: theme.palette.custom.skyBlue,
    },
  },
  "& .MuiInputBase-input": {
    "&::placeholder": {
      color: theme.palette.custom.seasalt,
      opacity: 0.7,
    },
  },
  width: "100%",
  borderRadius: "20px",
}))

export default InputTextField
