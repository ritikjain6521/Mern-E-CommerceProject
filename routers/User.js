import express from  'express'
import {login,profile,register, Users } from '../controllers/User.js';
import { Authenticated } from '../Middlewares/auth.js';
const router =express.Router();

// register user
router.post('/register',register) //=> /api/user/register
// login user
router.post('/login',login) //=> /api/user/login
//get all users
router.get('/all',Users)
//get profile
router.get('/profile',Authenticated,profile)
export default router