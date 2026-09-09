const mongoose = require('mongoose');
//const { timeStamp } = require('node:console');

const userSchema = new mongoose.Schema({
    firstName:{
        type : String,
        required : true,
        minLength:2,
        maxLength:50
    },
    lastName:{
        type:String
    },
    emailId:{
        type: String,
        required: true,
        unique: true, // no 2 users with same email
        lowercase: true,
        trim: true
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    gender :{
        type:String,
        validate(values){
            if(!["others","male","female"].includes(values)){
                throw new Error("Invalid gender!! Please type a valid gender");
            }
        }
    }
    
},{
    timestamps : true
});

const User = mongoose.model("User",userSchema);

module.exports = User;