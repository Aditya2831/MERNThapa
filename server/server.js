const express=require("express");
const app=express();
const PORT=5000;
const connectDb=require("./utils/db.js")
const router=require("./router/auth-router");
app.get("/",(req,res)=>{
    res.status(200).send("Hello world");
})




app.use(express.json())

// router wala use krne ke liye this is the default path
app.use("/api/auth", router)

app.get("/user",(req,res)=>{
    res.status(200).send("Hello world User");
})

connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`running at port: ${PORT}`);
    })
})



