//Require folder
const serverConfig = require("./Config/server.config")
const dbConfig = require("./Config/db.config")


// Require package
const express = require("express");
const app = express();
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const mongoose = require("mongoose")
 mongoose.connect(dbConfig.URL)
const db = mongoose.connection

db.on("error" ,() =>{
    console.log("Error while connection to DB ")
})

db.once("open" , async () =>{
    console.log("connected to mongoose DB ")

 })


 require("./Routes/auth.router")(app)


 
app.listen(serverConfig.PORT, () => {
    console.log("Application is start " + serverConfig.PORT)
})
