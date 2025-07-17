import mongoose from "mongoose";
const addressSchema =new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true
      },
    
    fullname:{type:String,require:true},
    address:{type:String,require:true},
    city:{type:String,require:true},
    state:{type:String,require:true},
    contury:{type:String,require:true},
    pincode:{type:String,require:true},
    mobileno:{type:String,require:true},
    createAdt:{type:Date,default:Date.now}
 });
 export const Address = mongoose.model("Address",addressSchema)