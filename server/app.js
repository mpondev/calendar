import express from 'express';
import cors from 'cors';

import userRouter from './routes/user.route.js';
import taskRouter from './routes/task.route.js';

import errorHandler from './middlewares/errorMiddleware.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use(errorHandler);

app.use('/api/v1/users', userRouter);
app.use('/api/v1/tasks', taskRouter);

export default app;
