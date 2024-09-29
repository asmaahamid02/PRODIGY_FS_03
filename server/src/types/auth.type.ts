import { Types, Document } from 'mongoose'
export interface ITokenPayload {
  id: Types.ObjectId | string
  email: string
}

export interface IUser extends Document {
  _id: Types.ObjectId
  name: string
  email: string
  password: string
}

export interface IUserRequest {
  name: string
  email: string
  password: string
  confirmPassword: string
}
