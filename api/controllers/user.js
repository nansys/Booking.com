import User from '../models/User.js'

export const updateUser = async (req, res, next) => {
  try {
    const updateUser = await User.findByIdAndUpdate(req.params.id,
      { $set: req.body }, { new: true })
      res.status(200).json(updateUser)
  } catch (e) {
      next(e)
  }
}

export const deleteUser = async (req, res, body) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id)
    res.status(200).json('User has been deleted')
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
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (e) {
      next(e)
  }
}