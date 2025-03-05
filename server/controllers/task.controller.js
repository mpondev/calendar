import Task from '../models/task.model.js';

export const getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json(tasks);
};

export const getTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.status(200).json(task);
};

export const createTask = async (req, res) => {
  const newTask = new Task(req.body);

  const task = await newTask.save();
  res.status(200).json(task);
};

export const deleteTask = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  res.status(200).json('Task has been deleted');
};
