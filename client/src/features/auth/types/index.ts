export interface IAuthState {
  token: string | null
  isAuthenticated: boolean
  loading: boolean
  error: string | null
  user: IUser | null
}

export interface IUser {
  id: string
  name: string
  email: string
  createdAt: string
}

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
