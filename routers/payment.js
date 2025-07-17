import express from 'express'
const  router =express.Router();
import { checkout,verify,userOrder,allorders} from '../controllers/Payment.js';
import { Authenticated } from '../Middlewares/auth.js';

//checkout

router.post('/checkout',checkout)

router.post('/verify-payment',verify)

router.get("/userorder",userOrder,Authenticated)

router.get("/order",allorders)


export default router