const {Router}=require("express")
const root= Router()

//url
root 
    .get("/",async(req,res)=>{
       await res.cookie("nombre","pedro")
        console.log(req.cookies);
        
        res.render("inicio.html")
    })

module.exports = root