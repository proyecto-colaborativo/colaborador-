const {Router}=require("express")
const root= Router()


//url
root 
    .get("/",(req,res)=>{
        res.json(req.cookies)
    })
    .post("/",(req,res)=>{
        res.json(data)
    })

module.exports = root