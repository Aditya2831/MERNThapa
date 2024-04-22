const home=async(req,res)=>{
    try {
        res
    .status(200)
    .send("Surprise Surprise MF")
    } catch (error) {
        console.log(error);
    }
}

const register=async(req,res)=>{
    try{
        res
    .status(200)
    .send("Register MF")
    }
    catch(error){
       res.status(400).send({msg:"Page not found mf"})
    }
    
}

module.exports={home,register}

