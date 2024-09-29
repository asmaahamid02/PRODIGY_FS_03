import { TOKEN_KEY } from '@/lib/constants'
import { createSlice } from '@reduxjs/toolkit'
import { IAuthState } from '../types'

//initial state
const initialState: IAuthState = {
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
