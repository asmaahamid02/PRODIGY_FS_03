import { TOKEN_KEY } from '@/lib/constants'

export const getUserToken = () => {
  return localStorage.getItem(TOKEN_KEY)
}
