import { styled, Typography } from "@mui/material"

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  alignSelf: "center",
  fontWeight: "bold",
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.custom.skyBlue,
}))

export default Title

// Gradient Title E.g.
// const Title = styled(Typography)(({ theme }) => ({
//   fontSize: "2rem",
//   alignSelf: "center",
//   WebkitBackgroundClip: "text",
//   WebkitTextFillColor: "transparent",
//   backgroundImage: theme.gradients.galaxy,
// }))
