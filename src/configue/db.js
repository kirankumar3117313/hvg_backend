const mongoose=require("mongoose");


require("dotenv").config();

const UserName=process.env.MONGOOSE_USERNAME;//HVG
const Password=process.env.MONGOOSE_PASSWORD;//Hvg123@hvg

const connect=()=>{
    return (mongoose.connect(`mongodb+srv://${UserName}:${Password}.eqxyc9x.mongodb.net/hvg`))
}

module.exports=connect;