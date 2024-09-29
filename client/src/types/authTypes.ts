export type TLoginRequest = {
  email: string
  password: string
}

export type TLoginResponse = {
  id: string
  name: string
  email: string
  token: string
  createdAt: string
}
