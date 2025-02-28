import express from 'express';
import cors from 'cors';

import errorHandler from './middlewares/errorMiddleware.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use(errorHandler);

app.get('/', (req, res) => {
  res.send('Hello from the server side!');
});

export default app;
