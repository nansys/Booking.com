import User from '../models/User.js'
import { createError } from '../utils/error.js'

export const updateUser = async (req, res, next) => {

  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true})
    res.status(200).json(updatedUser)
  } catch (e) {
    next(e)
  }

}

export const getUser = async (req, res, next) => {

  try {
    const user = await User.findById(req.params.id)
    res.status(200).json(user)
  } catch (e) {
    next(e)
  }

}

export const getAllUsers = async (req, res, next) => {

  const failed = true

  if  (failed) return next(createError(401, 'You are not authenticated!'))

  try {
    const allUsers = await User.find()
    res.status(200).json(allUsers)
  } catch (e) {
    next(e)
  }

}

export const deleteUser = async (req, res, next) => {

  try {
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json('User has been deleted')
  } catch (e) {
    next(e)
  }

}