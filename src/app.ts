import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './middlewars/globalErrorHandlers';
import { UserRoutes } from './app/modules/user/user.route';
import { AcademicSemesterRoute } from './app/modules/academicSemester/academicSemester.route';
const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application routes
app.use('/api/v1/users', UserRoutes);
app.use('/api/v1/academicSemester', AcademicSemesterRoute);

// testing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   Promise.reject(new Error('unhandled promise rejection'))
// })
// global error handler
app.use(globalErrorHandler);

export default app;
