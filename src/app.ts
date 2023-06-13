import express, { Application } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middlewars/globalErrorHandlers'
import { UserRoutes } from './app/modules/user/user.route'
const app: Application = express()

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// application routes
app.use('/api/v1/users', UserRoutes)

// testing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   Promise.reject(new Error('unhandled promise rejection'))
// })
// global error handler
app.use(globalErrorHandler)

export default app
