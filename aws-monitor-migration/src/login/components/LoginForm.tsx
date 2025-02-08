import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Input from "../../shared/components/Input"
import LoginButton from "./LoginButton"
import { Box, Stack } from "@mui/material"
import { loginSchema, LoginFormValues } from "../schemas/login"
import { credentials } from "../credentials/credentials"
import { useNavigate } from "react-router"
import { useState } from "react"
import ThemedAlert from "../../shared/components/Alert"

const LoginForm = () => {
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const methods = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })

  const { handleSubmit } = methods

  const onSubmit = (data: LoginFormValues) => {
    setError("")
    const validUser = credentials.find(
      (user) =>
        user.username === data.username && user.password === data.password
    )

    if (!validUser) {
      setError("Invalid username or password. Please try again.")
      return
    }
    navigate("/dashboard")
  }

  const handleGuest = () => {
    navigate("/dashboard")
  }

  return (
    <FormProvider {...methods}>
      <Box width={"100%"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            {error && <ThemedAlert message={error} />}
            <Input name={"username"} label={"Username"} />
            <Input name={"password"} label={"Password"} type='password' />
            <LoginButton type='submit'>Sign In</LoginButton>
            <LoginButton type='button' onClick={handleGuest}>
              Continue as Guest
            </LoginButton>
          </Stack>
        </form>
      </Box>
    </FormProvider>
  )
}

export default LoginForm
