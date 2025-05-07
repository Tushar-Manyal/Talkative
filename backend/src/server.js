import express from "express"
const app=express();
const PORT=3000;
app.get("/server",(req,res)=>{
    res.send("hello from the server file")
})

app.listen(PORT,()=>{
    console.log(`server is nathing at ${PORT}`)
})