import mongoose from 'mongoose'

const { Schema } = mongoose

const HotelSchema = mongoose.model('Hotel', new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  distance: {
    type: Number,
    required: true
  },
  photos: {
    type: [String],
    require: true
  },
  desc: {
    type: String,
    reuqire: true
  },
  rooms: {
    type: [String],
    required: true
  },
  cheapestPrice: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    min: 0,
    max: 5
  },
  featured: {
    type: Boolean,
    required: false
  }
}))

export default HotelSchema