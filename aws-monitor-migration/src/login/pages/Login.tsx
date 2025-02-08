import { styled } from "@mui/material"
import LoginCard from "../components/LoginCard"
import LoginButton from "../components/LoginButton"
import { CenteredContainer } from "../../shared/components/Container"
import Title from "../../shared/components/Title"

const Background = styled("div")(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  background: theme.gradients.main,
}))

const Login = () => {
  return (
    <Background>
      <CenteredContainer>
        <LoginCard>
          <Title>Welcome to AWS Monitor</Title>
          <LoginButton>Sign In</LoginButton>
        </LoginCard>
      </CenteredContainer>
    </Background>
  )
}

export default Login
