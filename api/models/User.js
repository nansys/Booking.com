import mongoose from 'mongoose'

const { Schema } = mongoose

const UserSchema = mongoose.model('User', new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    unique: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
}, { timestamps: true }))

export default UserSchema