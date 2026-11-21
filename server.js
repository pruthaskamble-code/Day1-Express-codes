const express = require('express');
const app = express()

app.get("/",(req,resp)=>{
    resp.end("Home...")
})

app.get("/contact",(req,resp)=>{
    resp.end("Contact...")
})

app.use((rep,resp)=>{
    resp.end("Error...")
})

app.listen(4000,()=>{
    console.log("running....");
})