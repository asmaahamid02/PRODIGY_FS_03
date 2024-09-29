import { toast } from '@/hooks/use-toast'
import { AxiosError } from 'axios'

export function handleError(error: unknown, prefix: string = '') {
  if (error instanceof AxiosError) {
    toast({
      title: error.response?.data?.error || error.message,
    })

    return
  } else if (error instanceof Error) {
    toast({
      title: error.message,
    })

    return
  }

  const messagePrefix = prefix ? `${prefix}: ` : ''
  console.log(`${messagePrefix}An unknown error occurred.`)
  toast({
    title: 'An unknown error occurred.',
  })
}
