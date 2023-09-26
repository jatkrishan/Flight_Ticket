const validactionVerify = require("../Middleware/validactionVerify.middleware")
const authController  = require("../Controller/auth.controller")


module.exports = function(app){
       
    app.post("/Airline/api/v1/user/signup", [validactionVerify.validactionVerify], authController.signup)
    app.post("/Airline/api/v1/user/signin",  authController.signin)

}