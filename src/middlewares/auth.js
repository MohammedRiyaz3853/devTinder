const adminAuth = (req,res,next)=>{
    console.log("Admin  auth is getting checked...")
    const token = "abc"
    const isAdminAuthorized = token === "abc"
    if(!isAdminAuthorized){
        res.status(401).send("Admin not authorized");
    }
    else{
        next();
    }
}
const userAuth = (req,res,next)=>{
    console.log("User auth is getting checked...")
    const token = "xyz"
    const isUserAuthorized = token === "xyz"
    if(!isUserAuthorized){
        res.status(401).send("User is not Authorized");
    }
    else{
        next();
    }

}

module.exports = {userAuth,adminAuth};