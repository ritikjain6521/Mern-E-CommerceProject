import { Address } from "../modules/Adress.js";
export const saveAddress= async(req,res)=>{

  let{fullname,address,city,state,contury,pincode,mobileno}= req.body
  let userId = req.user;
  let userAddress = await Address.create({
    userId,
    fullname,
    address,
    city,
    state,
    contury,
    pincode,
    mobileno
});

  res.json({message:"Address add",userAddress, success:true})




}
export const getaddress = async (req,res)=>{

    let address = await Address.find({userId:req.user}).sort({createAdt:-1})
res.json({message:"address", userAddress:address[0]})




}