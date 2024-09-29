import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/db'
import { getErrorMessage } from './utils/error.util'
import { IUser } from './types/auth.type'
import authRoutes from './routes/auth.route'

dotenv.config()

//add user property to Request interface
declare module 'express-serve-static-core' {
  interface Request {
    user?: IUser | null
  }
}

const app = express()
const port = process.env.PORT || 5000

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'Cache-Control',
      'Expires',
      'Pragma',
    ],
    credentials: true,
  })
)
app.use(express.json())
app.use('/api/auth', authRoutes)

connectDB()
  .then(() => {
    console.log('Connected to the database')
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`)
    })
  })
  .catch((error: unknown) => {
    console.log(getErrorMessage(error, 'Failed to connect to MongoDB!'))
  })
