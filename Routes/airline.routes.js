const userVerify = require("../Middleware/serVerifection")
const airlineController = require("../Controller/Airline.controller")

module.exports = function(app){
        
        app.post("Airline/auth/v1/airline",[userVerify.isValidUser, userVerify.isAdmin], airlineController.createAirline)
       app.get("Airline/auth/v1/airline/admin&user", [userVerify.isValidUser], airlineController.getByAll) 
       app.get("Airline/auth/v1/airline/admin&user/:airlineId", [userVerify.isValidUser], airlineController.getAirlineById) 
       app.put("Airline/auth/v1/airline/admin/:airlineId", [userVerify.isValidUser, userVerify.isAdmin], airlineController.updatedAirlineById) 
       app.delete("Airline/auth/v1/airline/admin/:airlineId", [userVerify.isValidUser, userVerify.isAdmin], airlineController.deleteAirlineById)
 
}