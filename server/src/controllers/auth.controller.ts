import User from '../models/user.model'
import { handleError } from '../utils/error.util'
import { validateRegisterRequest } from '../utils/authValidation.util'
import bcrypt from 'bcryptjs'
import { createToken } from '../utils/jwt.util'
import { validateRequiredFields } from '../utils/validation.util'
import { IUserRequest } from '../types/auth.type'
import { Request, Response } from 'express'

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password }: IUserRequest = req.body

    //Validate the request body
    validateRegisterRequest(req.body)

    //check if the user has an account
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      res.status(400).json({ error: 'Email already exists!' })
      return
    }

    //hash the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    })

    const token = createToken({ id: user._id, email })

    res.status(201).json({
        id: user._id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
        token,
      })

  } catch (error: unknown) {
    handleError(error, res, 'Error in Auth Controller - Register API')
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password }: IUserRequest = req.body

    validateRequiredFields(req.body, ['email', 'password'])

    const user = await User.findOne({ email })
    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.status(400).json({ error: 'Invalid credentials!' })
      return
    }

    const token = createToken({ id: user._id, email })

    res.status(200).json({
      id: user._id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
      token,
    })
  } catch (error: unknown) {
    handleError(error, res, 'Error in Auth Controller - Login API')
  }
}
