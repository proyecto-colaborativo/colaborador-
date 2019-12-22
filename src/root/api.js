const {Router}=require("express")
const root= Router()

//url
root 
    .get("/",(req,res)=>{
        res.json({hola:true})
    })
module.exports = root