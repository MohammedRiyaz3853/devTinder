const express = require('express');

const app = express();


app.get("/user",(req,res)=>{
    res.send("Iam getting the content from the server");
})



app.post("/user",(req,res)=>{
    res.send("Iam posting the content to the server");
})


app.listen(5000,()=>{console.log("app listening at 5000......");});



