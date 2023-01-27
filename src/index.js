const express=require("express");

const app=express();

const cors=require("cors");

const masterRouter=require("./controllers/login.controller");

const userRouter=require("./controllers/users.controller");

const itemRouter=require("./controllers/item.controller");
app.use(express.json());
app.use(cors());

app.use("",masterRouter);
app.use("",userRouter);
app.use("",itemRouter);


module.exports= app;