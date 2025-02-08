import { useForm } from "react-hook-form"
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const loginSchema = z.object({
  username: z.string().optional(),
  password: z.string().optional(),
})

type LoginForm = z.infer<typeof loginSchema>

const LoginForm = () => {
  const methods = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })
  return <form onSubmit={() => {}}></form>
}

export default LoginForm
