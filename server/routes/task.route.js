import express from 'express';
import Task from '../models/task.model.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.status(200).send(tasks);
});

export default router;
