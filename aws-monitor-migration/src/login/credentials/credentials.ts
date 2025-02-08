/**
 * This is a mock store for username and password. Replace this with actual user authentication in deployed environments.
 */

type UserCredentials = {
  username: string
  password: string
}

export const credentials: UserCredentials[] = [
  {
    username: "chayton",
    password: "Test123$",
  },
]
