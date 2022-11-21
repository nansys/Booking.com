import mongoose from 'mongoose'

const { Schema } = mongoose

const RoomSchema = mongoose.model('Room', new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    roomNumbers: [{ number: Number, unavailableDates: [{ type: [Date] }] }],
  },
  { timestamps: true }
))

export default RoomSchema