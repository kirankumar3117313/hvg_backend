const express=require("express");
const Item = require("../model/item");

const router=express.Router();


router.get("/item",async(req,res)=>{
    try{
        const itemData=await Item.find().lean().exec();
        return res.status(200).send(itemData);
    }catch(err){
        return res.status(200).send({message:err.message})
    }
})
router.get("/item/:id",async(req,res)=>{
    try{
        const itemData=await Item.findById(req.params.id).lean().exec();
        return res.status(200).send(itemData);
    }catch(err){
        return res.status(200).send({message:err.message})
    }
})
router.post("/item",async(req,res)=>{
    try{
        const item=await Item.create(req.body);
        return res.status(200).send(item);
    }
    catch(err){
        return res.status(401).send({message:err.message});
    }
});
router.put("/item/:id",async(req,res)=>{
    try{
        const addTimings=await Item.findOneAndUpdate({_id:req.params.id},{$push:{
            data:req.body.data
        }})
        return res.status(200).send(addTimings);
    }catch(err){
        return res.sattus(401).send({message:err.message});
    }
})

router.patch("/item/:id",async(req,res)=>{
    try{
      const itemUpdate=await Item.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
      return res.status(200).send(itemUpdate);
    }
    catch(err){
      return res.status(401).send({message:err.message});
   
    }
   })
router.patch("/item/:id/clear",async(req,res)=>{
    try{
        const itemEmptyArray=await Item.findByIdAndUpdate(req.params.id,{$set:{
            data:[]
        }})
        return res.status(200).send(itemEmptyArray);
    }catch(err){
        return res.status(200).send({message:err.message});
    }
})

router.delete("/item/:id",async(req,res)=>{
    try{
        const itemRemove=await Item.findByIdAndRemove(req.params.id).lean().exec();
        if(itemRemove){
            return res.status(200).send(itemRemove);
        }
        return res.send("Item not exists");
    }catch(err){
        return res.status(401).send({message:err.message});
    }
})
module.exports=router;