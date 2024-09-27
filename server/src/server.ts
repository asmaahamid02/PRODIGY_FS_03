import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/db'

dotenv.config()

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

connectDB()
  .then(() => {
    console.log('Connected to the database')
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`)
    })
  })
  .catch((error: any) => {
    console.log('Error connecting to the database: ', error.message)
  })
