import { styled, Typography } from "@mui/material"

const Description = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  textAlign: "left",
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.custom.seasalt,
}))

export default Description
