import express from 'express'
import { createHotel, updateHotel, deleteHotel, getHotel, getAllHotels } from '../controllers/hotel.js'
import { createError } from '../utils/error.js'
import { verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()

//CREATE HOTEL

router.post('/', verifyAdmin, createHotel)

//UPDATE HOTEL

router.put('/:id', verifyAdmin, updateHotel)

//DELETE HOTEL

router.delete('/:id', verifyAdmin, deleteHotel)

//GET HOTEL

router.get('/:id', getHotel)

//GET ALL HOTELS

router.get('/', getAllHotels)

export default router