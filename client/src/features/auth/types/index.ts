export interface IAuthState {
  token: string | null
  isAuthenticated: boolean
  loading: boolean
  error: string | null
  user: IUser | null
}

export interface IUser {
  _id: string
  fullName: string
  email: string
  avatar: string
}
