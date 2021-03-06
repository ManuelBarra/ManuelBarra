/* eslint-disable no-underscore-dangle */
const User = require('../models/userModel');
const Task = require('../models/taskModel');

async function getAll({ query }, res) {
  try {
    const users = await User.find(query);
    res.json(users);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function createOne({ body }, res) {
  try {
    const newUser = await User.create(body);
    res.json(newUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getById({ params }, res) {
  const { userId } = params;
  try {
    const foundUser = await User.findById(userId)
      .populate({
        path: 'tasks'
      });
    res.json(foundUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateOneById(req, res) {
  const { userId } = req.params;
  const dataToUpdate = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      dataToUpdate,
      { new: true }
    );
    res.json(updatedUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function addTaskToUser(req, res) {
  const { userId } = req.params;
  try {
    const newTask = await Task.create(req.body);
    const addedTask = await User.findByIdAndUpdate(
      userId,
      { $push: { tasks: newTask._id } },
      { new: true }
    );
    res.json(addedTask);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteTaskToUser(req, res) {
  const { userId } = req.params;
  const { tasks } = req.body;
  try {
    const deletedTask = await User.findByIdAndUpdate(
      userId,
      { $pull: { tasks } },
      { new: true }
    );
    res.json(deletedTask);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteOneById(req, res) {
  const { userId } = req.params;
  try {
    await User.findByIdAndDelete(userId);
    res.send('The user was deleted');
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  createOne,
  getAll,
  getById,
  updateOneById,
  addTaskToUser,
  deleteTaskToUser,
  deleteOneById

};
