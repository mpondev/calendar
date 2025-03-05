import express from 'express';

import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
} from '../controllers/task.controller.js';

const router = express.Router();

router.get('/', getTasks);
router.get('/:id', getTask);
router.post('/', createTask);
router.delete('/:id', deleteTask);

export default router;
