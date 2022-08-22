import Hotel from '../models/Hotel.js'
import { createError } from '../utils/error.js'

export const createHotel = async (req, res, next) => {

  const newHotel = new Hotel(req.body)
  try {
    const savedHotel = await newHotel.save()
    res.status(200).json(savedHotel)
  } catch (e) {
    next(e)
  }
  
}

export const updateHotel = async (req, res, next) => {

  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true})
    res.status(200).json(updatedHotel)
  } catch (e) {
    next(e)
  }

}

export const getHotel = async (req, res, next) => {

  try {
    const hotel = await Hotel.findById(req.params.id)
    res.status(200).json(hotel)
  } catch (e) {
    next(e)
  }

}

export const getAllHotels = async (req, res, next) => {

  const failed = true

  if  (failed) return next(createError(401, 'You are not authenticated!'))

  try {
    const allHotels = await Hotel.find()
    res.status(200).json(allHotels)
  } catch (e) {
    next(e)
  }

}

export const deleteHotel = async (req, res, next) => {

  try {
    await Hotel.findByIdAndDelete(req.params.id)
    res.status(200).json('Hotel has been deleted')
  } catch (e) {
    next(e)
  }

}