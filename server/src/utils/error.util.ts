import { Response } from 'express'

export const getErrorMessage = (error: unknown, prefix: string = '') => {
  if (error instanceof Error) {
    return `${prefix}${prefix ? ': ' : ''}${error.message}, ${error.stack}`
  } else {
    return `${prefix}${prefix ? ': ' : ''}An unknown error occurred.`
  }
}

export const handleError = (
  error: unknown,
  res: Response,
  prefix: string = ''
) => {
  console.log(getErrorMessage(error, prefix))
  if (error instanceof Error) {
    return res.status(400).json({ error: error.message })
  } else {
    return res.status(500).json({ error: 'Internal Server Error!' })
  }
}
