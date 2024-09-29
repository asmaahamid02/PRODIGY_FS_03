import { useState } from 'react'

import { handleError } from '@/lib/error'
import { loginService } from '@/services/authService'
import { TLoginRequest } from '@/features/auth/types'
export default function useLogin() {
  const [loading, setLoading] = useState(false)
  const login = async ({ email, password }: TLoginRequest) => {
    setLoading(true)
    try {
      const response = await loginService({ email, password })

      if ('error' in response) {
        throw new Error(response.error)
      }

      return response
    } catch (error: unknown) {
      handleError(error, 'Error in useAuthRequests - login')
    } finally {
      setLoading(false)
    }
  }
  return { login, loading }
}
