import { useState } from 'react'
import { axiosInstance } from '@/services/interceptor'
import { handleError } from '@/lib/error'

interface IPostResponse<T> {
  data: T | null
  loading: boolean
}

export default function usePost<T>() {
  const [response, setResponse] = useState<IPostResponse<T>>({
    data: null,
    loading: false,
  })

  //eslint-disable-next-line
  const post = async (url: string, body: any) => {
    setResponse({ data: null, loading: true })
    try {
      const result = await axiosInstance.post<T>(url, body)
      setResponse({ data: result.data, loading: false })
    } catch (error: unknown) {
      handleError(error, 'Error in usePost')
    } finally {
      setResponse({ data: null, loading: false })
    }
  }

  return { ...response, post }
}
