import type React from "react"
import { styled } from "@mui/material/styles"
import Alert from "@mui/material/Alert"

const StyledAlert = styled(Alert)(({ theme }) => ({
  backgroundColor: theme.palette.custom.richBlack,
  color: theme.palette.custom.seasalt,
  border: `1px solid ${theme.palette.custom.blueViolet}`,
  "& .MuiAlert-icon": {
    color: theme.palette.custom.skyBlue,
  },
}))

interface ThemedAlertProps {
  message: string
}

const ThemedAlert: React.FC<ThemedAlertProps> = ({ message }) => {
  return (
    <StyledAlert severity='error' variant='outlined'>
      {message}
    </StyledAlert>
  )
}

export default ThemedAlert
