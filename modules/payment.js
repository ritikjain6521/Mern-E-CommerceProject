import mongoose from "mongoose";
const paymentSchema= new mongoose.Schema({
   orderDate:{type:Date,default:Date.now},
   payStatus:{type:String}



},{strict:false})

export const payment = mongoose.model('payment',paymentSchema)