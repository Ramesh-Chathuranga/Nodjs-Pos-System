import express=require("express");
import mainDispatcher from "./dispatcher/main-dispatcher";
const app=express();
app.use(mainDispatcher)
app.listen(3000,()=>{
   console.log ("Server is listening at 3000")
})

