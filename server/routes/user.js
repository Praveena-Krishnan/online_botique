import express from 'express';
import { createUser, findUser } from '../controllers/user.js';
const router = express.Router()


// http://localhost:5000/addUser
router.post('/',createUser)
router.get('/user/:email',findUser)
router.get('/login/user/:email/:password',findLoginUser)










export default router
