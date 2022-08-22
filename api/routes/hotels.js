import express from 'express'
import { createHotel, updateHotel, getHotel, getAllHotels, deleteHotel } from '../controllers/hotel.js'

const router = express.Router()

//CREATE

router.post('/', createHotel)

//UPDATE

router.put('/:id', updateHotel)

//GET

router.get('/:id', getHotel)

//GET ALL

router.get('/', getAllHotels)

//DELETE

router.delete('/:id', deleteHotel)

export default router