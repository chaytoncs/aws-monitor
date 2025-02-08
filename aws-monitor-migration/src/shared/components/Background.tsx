import { styled } from "@mui/material"

const Background = styled("div")(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  background: theme.gradients.main,
}))

export default Background
