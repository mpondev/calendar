import Task from '../models/task.model.js';
import User from '../models/user.model.js';

export const getTasks = async (req, res) => {
  const clerkUserId = req.auth.userId;

  if (!clerkUserId) {
    return res.status(401).json('Not authenticated!');
  }

  const user = await User.findOne({ clerkUserId });

  if (!user) {
    return res.status(404).json('User not found!');
  }

  const tasks = await Task.find({ user: user._id });
  res.status(200).json(tasks);
};

export const getTask = async (req, res) => {
  const clerkUserId = req.auth.userId;

  if (!clerkUserId) {
    return res.status(401).json('Not authenticated!');
  }

  const user = await User.findOne({ clerkUserId });

  if (!user) {
    return res.status(404).json('User not found!');
  }

  const task = await Task.findById({ _id: req.params.id, user: user._id });
  res.status(200).json(task);
};

export const createTask = async (req, res) => {
  const clerkUserId = req.auth.userId;

  if (!clerkUserId) {
    return res.status(401).json('Not authenticated!');
  }

  const user = await User.findOne({ clerkUserId });

  if (!user) {
    return res.status(404).json('User not found!');
  }

  const newTask = new Task({ user: user._id, ...req.body });

  const task = await newTask.save();
  res.status(200).json(task);
};

export const deleteTask = async (req, res) => {
  const clerkUserId = req.auth.userId;

  if (!clerkUserId) {
    return res.status(401).json('Not authenticated!');
  }

  const user = await User.findOne({ clerkUserId });

  if (!user) {
    return res.status(404).json('User not found!');
  }

  const deletedTask = await Task.findByIdAndDelete({
    _id: req.params.id,
    user: user._id,
  });

  if (!deletedTask) {
    return res.status(403).json('You can delete only your tasks!');
  }

  res.status(200).json('Task has been deleted');
};
