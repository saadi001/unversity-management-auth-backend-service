import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './middlewars/globalErrorHandlers';
import routes from './app/routes';
const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application routes
app.use('/api/v1', routes);

// global error handler
app.use(globalErrorHandler);

export default app;
