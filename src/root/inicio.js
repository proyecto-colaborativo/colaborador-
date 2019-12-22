const {Router}=require("express")
const root= Router()

//url
root 
    .get("/",(req,res)=>{
        res.render("inicio.html")
    })

module.exports = root