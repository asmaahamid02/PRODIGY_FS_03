import { TOKEN_KEY } from '@/lib/constants'
import { createSlice } from '@reduxjs/toolkit'

//type of slice state
interface AuthState {
  token: string | null
  isAuthenticated: boolean
  loading: boolean
  error: string | null
  user: any
}

//initial state
const initialState: AuthState = {
  token: localStorage.getItem(TOKEN_KEY),
  isAuthenticated: false,
  loading: false,
  error: null,
  user: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {},
  },
})

export const { loginStart } = authSlice.actions
export default authSlice.reducer
