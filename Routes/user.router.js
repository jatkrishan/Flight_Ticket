const userVerify = require("../Middleware/userVerifection")
const userController = require("../Controller/user.controller")

module.exports = function(app){
     
        app.get("User/auth/v1/user/:id", [userVerify.isValidUser], userController.getByIdUser) 
       app.get("User/auth/v1/user/admin", [userVerify.isValidUser, userVerify.isAdmin], userController.getByAll) 
       app.get("User/auth/v1/user/admin/:id", [userVerify.isValidUser, userVerify.isAdmin], userController.getByIdAdmon) 
       app.put("User/auth/v1/user/admin/:id", [userVerify.isValidUser, userVerify.isAdmin], userController.updateByIdAdmin) 
       app.delete("User/auth/v1/user/admin/:id", [userVerify.isValidUser, userVerify.isAdmin], userController.deleteByIdAdmin)

}