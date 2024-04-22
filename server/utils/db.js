const mongoose=require("mongoose");

const URI="mongodb://127.0.0.1:27017/demomern"
// mongoose.connect(URI);

const connectDb=async()=>{
    try {
        await mongoose.connect(URI);
        console.log("connection established");
    } catch (error) {
        console.error("db connection failed");
        process.exit(0);
    }
}

module.exports=connectDb;