const express = require('express');
const connectDB = require('./config/database');
const User = require("./models/user");
const app = express();
app.use(express.json());

app.get("/user",async(req,res)=>{
    const userEmail = req.body.emailId
    console.log(userEmail);
    try{
       const users =  await User.find({emailId : userEmail})
        
        res.send(users);
    }
    catch(err) {
        res.status(400).send("Something Went wrong my dear please check!!");
    }
})
app.get("/feed",async(req,res)=>{
    const users = User(req.body);
    try{
        
        res.send(await User.find({}).sort({createdAt : -1}));
    }
    catch(err) {
        res.status(400).send("Something Went wrong my dear please check!!");
    }
})
app.post("/signup",async (req,res)=>{
    const userObj = req.body;
    const user = new User(userObj);
    try{
        await user.save();
    res.send("User Created Successfuly");
    }
    catch(err){
        res.status(400).send("Error creating the user"+err.message);
    }
})


connectDB()
.then(() => {
    console.log("Database Connected");
    app.listen(5000, () => {
        console.log("app listening at 5000...");
    });
})
.catch((err) => {
    console.log("Connection failed:", err.message);
}); 











































// const express = require('express');

// const app = express();
// const connectDB = require("./config/database");
// // const {adminAuth,userAuth} = require("./middlewares/auth")

// // app.use("/admin/getData",adminAuth,(req,res)=>{
// //     res.send("Getting the user data");
// // })
// // app.use("/admin/deleteUser",adminAuth,(req,res)=>{
// //     res.send("Admin deleting the user");
// // })
// // app.use("/user",userAuth,(req,res)=>{
// //     res.send("user is logged in!!");
// // })
// connectDB()
//     .then(() => {
//         console.log("Database Connected");
//         app.listen(5000, () => {
//             console.log("app listening at 5000......");
//         });
//     })
//     .catch((err) => {
//         console.log("Connection establishment failed:", err.message);
//     });




// app.listen(5000,()=>{console.log("app listening at 5000......");});








// // app.get("/user/:userId/:name/:password",(req,res)=>{
// //     console.log({...req.params});
// //     res.send({"firstName":"Mohammed","LastName":"Riyaz"})
// //     //res.send("Iam getting the content from the server");
// // })



// // app.post("/user",(req,res)=>{
// //     res.send("Iam posting the content to the server");
// // })


// // app.get("/user",(req,res,next)=>{
// //     console.log("Just nothing!!");

// //     res.send("Iam the first user response");
// // }
// // )
// // app.get("/user",(req,res,next) =>{
// //     console.log("Iam the second handler");
// //     next();
// // })
 

// // //Usage of middle ware
// // app.use("/user", (req, res, next) => {
// //     const token = "lsjgs";
// //     const isAdminAuthorized = token === "abc";
// //     if (!isAdminAuthorized) {
// //         res.status(401).json({ 401: "Unauthorized" });
// //     }
// //     else{
// //         next();
// //     }
    
// // });
// // app.get("/user/getAdminData", (req, res) => {
// //     res.send("Sent all data ");
// // });
// // app.get("/user/deleteUser", (req, res) => {
// //     res.send("Deleted the user");
// // });

