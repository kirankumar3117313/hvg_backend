const mongoose=require("mongoose");
const Login = require("./Login");

const UsersSchema=new mongoose.Schema({
  
    user:{type:String,required:true},
    userData:{type:Array,default:[]},
},
    {versionKey:false,
    timestamps:true}
)


const Users=mongoose.model("Users",UsersSchema);

module.exports=Users;