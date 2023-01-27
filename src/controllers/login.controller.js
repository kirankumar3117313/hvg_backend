const express=require("express");
const Login = require("../model/Login");

const router=express.Router();



router.patch("/master/:id",async(req,res)=>{
 try{
   const user=await Login.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
   return res.status(200).send(user);
 }
 catch(err){
   return res.status(401).send({message:err.message});

 }
})

module.exports=router;