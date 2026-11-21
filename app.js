const express = require('express');
const app = express()

app.use(express.json())

app.get("/",(req,resp)=>{
    resp.end("home...")
})

app.post("/data",(req,resp)=>{
    const result = req.body
    resp.end(result)
    req.json(result)
})

app.listen(5000,()=>{
    console.log("running...");
})