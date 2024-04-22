const express=require("express");
const router=express.Router();
const {home,register}=require("../controllers/auth-controller")


// router.get("/",(req,res)=>{
//     res.status(200).send("Hello world mf");
// })

router.route("/").get(home)

router.route("/register").post(register)

module.exports=router