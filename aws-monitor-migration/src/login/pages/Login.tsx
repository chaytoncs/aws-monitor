import LoginCard from "../components/LoginCard"
import { CenteredContainer } from "../../shared/components/Container"
import Title from "../../shared/components/Title"
import LoginForm from "../components/LoginForm"
import Subtitle from "../../shared/components/Description"
import Background from "../../shared/components/Background"
import AwsMonitorLogo from "../../shared/components/AwsMonitorLogo"

const Login = () => {
  return (
    <Background>
      <CenteredContainer>
        <LoginCard>
          <AwsMonitorLogo />
          <Title>Sign In</Title>
          <LoginForm />
          <Subtitle>
            AWS Monitor is a React-based application for monitoring AWS Auto
            Scaling Groups (ASGs) and their instances. It provides a
            user-friendly interface for viewing and managing ASGs, offering
            detailed information about each group and its associated instances.
          </Subtitle>
        </LoginCard>
      </CenteredContainer>
    </Background>
  )
}

export default Login
