const express = require('express');

const app = express();

app.use("/", (req,res)=>{
    res.json({"Kamal":"Hi,Iam from DashBoard"})
})

app.listen(5000,()=>{console.log("app listening at 5000......");});



