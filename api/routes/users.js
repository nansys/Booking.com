import express from 'express'
import { updateUser, deleteUser, getUser, getAllUsers } from '../controllers/user.js'
import { verifyToken } from '../utils/verifyToken.js'

const router = express.Router()

router.get('/checkauthentication', verifyToken, (req, res, next) => {
  res.send('Hello User, you are logged in')
})
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.get('/:id', getUser)
router.get('/', getAllUsers)

export default router