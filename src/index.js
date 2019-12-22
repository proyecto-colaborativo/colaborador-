const express = require("express")
const morgan = require("morgan")
const path = require("path")
const app = express()

//set
app
    .set("root", process.env.PORT ||4000)
    .set("views", path.join(__dirname+"/views"))
    .set("view engine", "ejs")
    .engine("html",require("ejs").renderFile)

//use 
app 
    .use(morgan("dev"))
    .use(express.static(__dirname+"/static"))

//rauts
    .use("/",require("./root/inicio.js"))
    .use("/api",require("./root/api.js"))

//serbidor
app.listen(app.get("root"),()=>{
    console.log("http://localhost:"+app.get("root"))
})