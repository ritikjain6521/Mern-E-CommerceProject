import express from "express";
import { Authenticated } from "../Middlewares/auth.js";
import { getaddress, saveAddress } from "../controllers/Address.js";
const router = express.Router()

router.post('/add',Authenticated,saveAddress)
router.get("/get",Authenticated,getaddress)

export default router;