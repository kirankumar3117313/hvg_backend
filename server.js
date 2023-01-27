const app=require("./src/index");

require("dotenv").config();

const PORT=process.env.port || 8080;

const connect=require("./src/configue/db");

const mongoose=require("mongoose");


app.listen(PORT,async()=>{
    try{
        mongoose.set('strictQuery', false);

        await connect();
       
        console.log("connected with data base port 8080");
    }
    catch(error){
        console.log("ERROR",error.message);
    }
})