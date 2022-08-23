import bcrypt from 'bcryptjs'
import User from '../models/User.js'
import { createError } from '../utils/error.js'
import jwt from 'jsonwebtoken'

export const register = async (req, res, next) => {

  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(req.body.password, salt)

  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash
    })

    await newUser.save()
    res.status(200).send('User has been created.')
    
  } catch (e) {
    next(e)
  }
}

export const login = async (req, res, next) => {

  try {
    const user = await User.findOne({username: req.body.username})
    if(!user) return next(createError(404, 'User not found!'))

    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
    if(!isPasswordCorrect) return await next(createError(400, 'Wrong password or username'))

    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT)

    res.cookies('access_token', token, {
      httpOnly: true
    })
   
  } catch (e) {
    next(e)
  }
  
}