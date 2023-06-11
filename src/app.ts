import express, { Application } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middlewars/globalErrorHandlers'
import { UserRoutes } from './app/modules/users/user.route'
const app: Application = express()

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// application routes
app.use('/api/v1/users', UserRoutes)

// testing
// app.get('/', (req: Request, res: Response, next: NextFunction)=>{
//     throw new ApiError(400, "abar error khailam")
// })
// global error handler
app.use(globalErrorHandler)

export default app
