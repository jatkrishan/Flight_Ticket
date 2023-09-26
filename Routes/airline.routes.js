const userVerify = require("../Middleware/userVerifection")
const airlineController = require("../Controller/airline.controller")

module.exports = function(app){
        app.post("Airline/auth/v1", airlineController.createAirline)
       app.get("User/auth/v1/user/admin&user", [userVerify.isValidUser], airlineController.getByAll) 
       app.get("User/auth/v1/user/admin&user/:id", [userVerify.isValidUser], airlineController.getByIdAirline) 
       app.put("User/auth/v1/user/admin/:id", [userVerify.isValidUser, userVerify.isAdmin], airlineController.updateByIdAirline) 
       app.delete("User/auth/v1/user/admin/:id", [userVerify.isValidUser, userVerify.isAdmin], airlineController.deleteByIdAirline)

}