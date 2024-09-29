import { validateRequiredFields } from './validation.util'
import Validator from 'validator'
import { IUserRequest } from '../types/auth.type'

// Utility function to validate name format
const validateName = (name: string) => {
  if (!Validator.isLength(name.trim(), { min: 5, max: 50 })) {
    throw new Error('Invalid name. Must contain 5-50 alphanumeric characters.')
  }
}

// Utility function to validate password format
const validatePassword = (password: string) => {
  if (
    !Validator.isLength(password.trim(), { min: 8, max: 20 }) ||
    !Validator.isStrongPassword(password)
  ) {
    throw new Error(
      'Invalid password. Must be 8-20 characters long and include uppercase, lowercase, number, and special character.'
    )
  }
}

// Utility function to check if passwords match
const passwordsMatch = (password: string, confirmPassword: string): boolean => {
  return password === confirmPassword
}

export const validateRegisterRequest = (body: IUserRequest) => {
  const { name, email, password, confirmPassword } = body

  validateRequiredFields(body, ['name', 'email', 'password', 'confirmPassword'])

  if (!Validator.isEmail(email)) {
    throw new Error('Invalid email!')
  }

  validateName(name)
  validatePassword(password)

  if (!passwordsMatch(password, confirmPassword)) {
    throw new Error('Passwords do not match!')
  }
}
