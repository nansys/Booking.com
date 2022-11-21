import express from 'express'
import { updateUser, deleteUser, getUser, getAllUsers } from '../controllers/user.js'
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

router.get('/checkauthentication', verifyToken, (req, res, next) => {
  res.send('Hello user, you are logged in')
})

router.get('/checkuser/:id', verifyUser, (req, res, next) => {
  res.send('Hello user, you are logged in and you can delete you account')
})

router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
  res.send('Hello admin,, you are logged in and you can delete all accounts')
})

//UPDATE USER

router.put('/:id', verifyUser, updateUser)

//DELETE HOTEL

router.delete('/:id', verifyUser, deleteUser)

//GET USER
router.get('/:id', verifyUser, getUser)

//GET ALL USERS
router.get('/', verifyAdmin, getAllUsers)


export default router