const mongoose=require("mongoose");

const LoginSchema=new mongoose.Schema({
    master:{type:String,required:true},
    password:{type:String,required:true},
    staffPassword:{type:String}
},
    {versionKey:false,
    timestamps:true}
)


const Login=mongoose.model("login",LoginSchema);

module.exports=Login;