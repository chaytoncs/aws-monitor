import { styled, Button } from "@mui/material"

const LoginButton = styled(Button)(({ theme }) => ({
  background: theme.gradients.galaxy,
  color: theme.palette.custom.seasalt,
  transition: "all 0.3s ease-in-out",
  ":hover": {
    transform: "scale(1.02)",
  },
  fontSize: "1rem",
  fontFamily: theme.typography.fontFamily,
}))

export default LoginButton
