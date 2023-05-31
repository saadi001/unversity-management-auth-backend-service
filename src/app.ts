import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userRoutes from './app/modules/users/user.route'
const app: Application = express()

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// application routes
app.use('/api/v1/users', userRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('successfully working.')
})

export default app
