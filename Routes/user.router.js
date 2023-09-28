const userVerify = require("../Middleware/serVerifection")
const userController = require("../Controller/User.controller")

module.exports = function(app){
     
        app.get("Airline/auth/v1/user/:userId", [userVerify.isValidUser], userController.getUserById) 
       app.get("Airline/auth/v1/user/admin", [userVerify.isValidUser, userVerify.isAdmin], userController.getAllUser) 
       app.get("Airline/auth/v1/user/admin/:userId", [userVerify.isValidUser, userVerify.isAdmin], userController.getUserById) 
       app.put("Airline/auth/v1/user/admin/:userId", [userVerify.isValidUser, userVerify.isAdmin], userController.updateUserById) 
       app.delete("Airline/auth/v1/user/admin/:userId", [userVerify.isValidUser, userVerify.isAdmin], userController.deleteUserById)

}