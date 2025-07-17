import { payment } from '../modules/payment.js';
import Razorpay from 'razorpay'

const razorpay = new Razorpay({
  key_id: 'rzp_test_AJvNPrJVEVbVga',
  key_secret: 'amoFhvew1LF5kjkB9NGCerBa',
});

export const checkout = async (req,res) =>{
  const{amount, cartitems,userShipping,userid}= req.body
  var options ={
    amount:amount*100,
    currency:"INR",
    receipt:`receipt_${Date.now()}`,



  };
  const order = await razorpay.orders.create(options);
    res.json({

      orderId: order.id,
      amount: amount, 
      cartitems,
      userShipping,
      userid,
      payStatus:"created"




    });




  }
export const verify = async (req, res) => {

const {orderId,
  paymentId,  
  signature, 
  amount, 
  orderitems,  
  userid,
  userShipping } = req.body;
  

  let orderConfirm = await payment.create({
      
   orderId,
  paymentId,  
  signature, 
  amount, 
  orderitems,  
  userid,
  userShipping,
  payStatus:"paid"


    
  })

  res.json({message:"payment successfull....",success:true,orderConfirm})

 
}

export const userOrder = async (req,res)=>{
 let userId= req.user
 let orders = await payment.find({userId:userId}).sort({orderDate:-1});
 res.json(orders)

}

export const allorders = async (req,res)=>{
 let orders = await payment.find().sort({orderDate:-1});
 res.json(orders)

}





