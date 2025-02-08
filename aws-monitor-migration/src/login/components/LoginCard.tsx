import { styled, Card } from "@mui/material"

const LoginCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  backgroundColor: theme.palette.custom.oxfordBlue,
  color: theme.palette.custom.seasalt,
  [theme.breakpoints.up("sm")]: {
    width: "550px",
  },
  boxShadow: `0 0 10px 0 ${theme.palette.custom.taupeGray}`,
  borderRadius: "15px",
  height: "auto",
  justifyContent: "center",
  alignItems: "center",
}))

export default LoginCard
