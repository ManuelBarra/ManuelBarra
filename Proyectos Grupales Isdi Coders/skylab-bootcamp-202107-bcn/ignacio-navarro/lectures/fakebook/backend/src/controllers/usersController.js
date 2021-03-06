/* eslint-disable no-underscore-dangle */
const User = require('../models/userModel');

async function postUser({ body }, res) {
  try {
    const newUser = await User.create(body);
    res.json(newUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getAllUsers({ query }, res) {
  try {
    const allUsers = await User.find(query);
    res.json(allUsers);
  } catch (error) {
    res.status(404);
    res.send(error);
  }
}
async function getAdversaries({ query }, res) {
  try {
    const adversaries = await User.find(query);
    res.json(adversaries);
  } catch (error) {
    res.status(404);
    res.send(error);
  }
}
async function getFriends({ query }, res) {
  try {
    const friends = await User.find(query);
    res.json(friends);
  } catch (error) {
    res.status(404);
    res.send(error);
  }
}
async function putFriends(req, res) {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.params,
      { $addToSet: req.body },
      {
        new: true,
        useFindAndModify: false,
      },
    ).populate({
      path: 'friends._id',
      select: ['name', 'picture'],
    })
      .populate({
        path: 'adversaries._id',
        select: ['name', 'picture'],
      });

    res.json(updatedUser);
  } catch (error) {
    res.status(404);
    res.send(error);
  }
}
async function putAdversaries(req, res) {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.params,
      { $addToSet: req.body },
      {
        new: true,
        useFindAndModify: false,
      },
    ).populate({
      path: 'friends._id',
      select: ['name', 'picture'],
    })
      .populate({
        path: 'adversaries._id',
        select: ['name', 'picture'],
      });

    res.json(updatedUser);
  } catch (error) {
    res.status(404);
    res.send(error);
  }
}
async function getOneUser({ params: { userId } }, res) {
  try {
    const foundUser = await User.findById(userId)
      .populate({
        path: 'friends._id',
        select: ['name', 'picture'],
      })
      .populate({
        path: 'adversaries._id',
        select: ['name', 'picture'],
      });
    res.status(200);
    res.json(foundUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function updateUser({ body, params: { userId } }, res) {
  try {
    const userToUpdate = await User.findByIdAndUpdate(
      userId,
      body,
      {
        new: true,
        useFindAndModify: false,
      },
    );
    res.json(userToUpdate);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteUser({ params: { userId } }, res) {
  try {
    await User.findByIdAndDelete(userId);
    res.status(204);
    res.json();
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  postUser,
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
  getFriends,
  getAdversaries,
  putFriends,
  putAdversaries,
};
