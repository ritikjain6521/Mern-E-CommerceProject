import { Cart } from "../modules/Cart.js";


//add to cart
export const addToCart= async(req,res)=>{
   const {productId,title,price,qty,imgSrc} = req.body;

    const userId =req.user; 
    let cart= await Cart.findOne({userId});  

    if(!cart){

        cart = new Cart({userId,items:[]})
    }
    const itemIndex = cart.items.findIndex(         
        (item)=>item.productId?.toString() === productId
    
    
    );


    if(itemIndex> -1){

        cart.items[itemIndex].qty += qty;
        cart.items[itemIndex].price +=price*qty;
    }  else{

        cart.items.push({productId,title,price,qty,imgSrc});
    }  
  
    await cart.save();
    res.json({message:"Item added to cart",cart})

}
// get User cart

export const getUserCart = async(req,res)=>{
    
    const userId = req.user; 
    let cart = await Cart.findOne({userId});
    if(!cart)
      return  res.json({message:"user cart is not found"}
    )
    res.json({message:"user cart",cart})
}
//remove item from cart

export const removeItemFromCart = async(req,res)=>{
    const productId = req.params.productId;
    const userId = req.user; 
    let cart = await Cart.findOne({userId});
    if(!cart)
      return  res.json({message:"user cart is not found"}
    );
    cart.items =cart.items.filter((item)=>item.productId.toString() !== productId)
    await cart.save();
    
    
    res.json({message:"product remove from cart"})
}
//remove item from cart

export const clearItemFromCart = async(req,res)=>{

    const userId = req.user; 
    let cart = await Cart.findOne({userId});
    if(!cart){
     
        cart = new Cart({items:[]})

    }
    else{
        cart.items =[];
   
    }   
    await cart.save();     
    res.json({message:"cart is cleared"})
}
//decreaseqty from cart

export const decreaseqtyfromCart= async(req,res)=>{
    const {productId,qty} =req.body
 
     const userId =req.user; 
     let cart= await Cart.findOne({userId});
 
     if(!cart){
 
         cart = new Cart({userId,items:[]})
     }
     const itemIndex = cart.items.findIndex(
         (item)=>item.productId?.toString() === productId
     
     
     );
 
 
     if(itemIndex> -1){
        const item = cart.items[itemIndex]
        if(item.qty > qty){

            const pricePerUnit =item.price/item.qty
            item.qty -=qty
            item.price -= pricePerUnit*qty

        } else{

            cart.items.splice(itemIndex,1)

        }
 
         
     }  else{
 
         res.json({message:"invaild producte id"})
     }  
   
     await cart.save();
     res.json({message:"Item qty is decreased",cart});
 
 };