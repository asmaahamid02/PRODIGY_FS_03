import { handleError } from '@/lib/error'
import { axiosInstance } from '@/services/interceptor'
import { useState, useEffect } from 'react'

export default function useGet<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get<T>(url)
        setData(response.data)
      } catch (err) {
        handleError(err, 'Error in useGet')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { data, loading }
}
