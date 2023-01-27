const mongoose=require("mongoose");

const itemSchema=new mongoose.Schema({
    name:{type:String,required:true},
    quantity:{type:Number,required:true},
    minQuantity:{
        type:Number,required:true
    },
    price:{type:Number,default:0},
    data:{type:Array,default:[]}
},
    {
        versionKey:false
    }
)

const Item=mongoose.model("item",itemSchema);

module.exports=Item;