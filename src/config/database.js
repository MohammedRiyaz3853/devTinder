const mongoose = require('mongoose');
const dns = require('dns');

// FORCE Google DNS - This fixes querySrv ECONNREFUSED on Windows
dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']);

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://mohammedriyaz9652_db_user:2Mv2Ae1OygZ2ubiW@devtinder.nud2kth.mongodb.net/devTinder?appName=devTinder", {
        family: 4
    });
};
// const connectDB = async()=>{
//     await mongoose.connect(
//         "mongodb+srv://mohammedriyaz9652_db_user:2Mv2Ae1OygZ2ubiW@devtinder.nud2kth.mongodb.net/devTinder?appName=devTinder"
//     );
// }

module.exports = connectDB;