import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './middlewars/globalErrorHandlers';
import routes from './app/routes';
import httpStatus from 'http-status';
const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application routes
app.use('/api/v1', routes);

// global error handler
app.use(globalErrorHandler);

// handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found!',
    errorMessage: {
      path: req.originalUrl,
      message: 'Api not found.',
    },
  });
  next();
});

export default app;
