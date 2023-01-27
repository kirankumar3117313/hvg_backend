const express=require("express");

const router=express.Router();

const Users=require("../model/Users");

router.get("/user",async(req,res)=>{
    try{
        const userList=await Users.find().lean().exec();
        return res.status(200).send(userList);
    }
    catch(err){
        return res.status(401).send({message:err.message})
    }
})
router.post("/user",async(req,res)=>{
    try{
        const userdata= await Users.create(req.body);
        return res.status(200).send(userdata)
      }catch(err){
          return res.status(401).send({message:err.message})
      }
})

router.put("/user/:id",async(req,res)=>{
    try{
        const userData=await Users.findOneAndUpdate({_id:req.params.id},{$push:{
            userData:req.body.userData
        }});
        return res.status(200).send(userData);
    }catch(err){
        return res.status(401).send({message:err.message})
    }
})

router.patch("/user/:id/clear",async(req,res)=>{
    try{
        const userArrayRemove=await Users.findByIdAndUpdate(req.params.id,{
           $set:{
            userData:[]
           }
        });
        return res.status(200).send(userArrayRemove);
    }catch(err){
        return res.status(401).send({message:err.message})
    }
})

router.delete("/user/:id",async(req,res)=>{
    try{
        const userRemove=await Users.findByIdAndRemove({_id:req.params.id});
        if(userRemove){
        return res.status(200).send(userRemove);
        }
        return res.status(200).send("user not exists")
    }catch(err){
        return res.status(401).send({message:err.message});
    }
})



module.exports=router;