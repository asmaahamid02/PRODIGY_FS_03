import { axiosInstance } from './interceptor'
import { TLoginResponse } from '@/types/authTypes'

export const loginService = async (credentials: {
  email: string
  password: string
}): Promise<TLoginResponse | { error: string }> => {
  const response = await axiosInstance.post('auth/login', credentials)
  return response.data
}
