const userVerify = require("../Middleware/serVerifection")
const airlineController = require("../Controller/Flight.controller")

module.exports = function(app) {
        
        app.post("Airline/auth/v1/flight",[userVerify.isValidUser, userVerify.isAdmin], airlineController.createFlight)
       app.get("Airline/auth/v1/flight/admin&user", [userVerify.isValidUser], airlineController.getAllFlight) 
       app.get("Airline/auth/v1/flight/admin&user/:flightId", [userVerify.isValidUser], airlineController.getFlightById) 
       app.put("Airline/auth/v1/flight/admin/:flightId", [userVerify.isValidUser, userVerify.isAdmin], airlineController.updatedFlightById) 
       app.delete("Airline/auth/v1/flight/admin/:flightId", [userVerify.isValidUser, userVerify.isAdmin], airlineController.deleteFlightById)
 
}