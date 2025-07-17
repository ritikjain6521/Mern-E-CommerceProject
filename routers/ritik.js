import express from 'express'
import { addToCart, clearItemFromCart, getUserCart, removeItemFromCart,decreaseqtyfromCart} from '../controllers/cart.js';
import { Authenticated } from '../Middlewares/auth.js';
const router = express.Router();
//add to cart
router.post('/add',Authenticated,addToCart)
// get user Cart
router.get('/user', Authenticated, getUserCart);
// remove cart
router.delete('/remove/:productId',   Authenticated,removeItemFromCart);

// clear cart
router.delete('/clear',Authenticated,clearItemFromCart);

// decrearse qty
router.post('/--qty',Authenticated,decreaseqtyfromCart);



export default router;
     