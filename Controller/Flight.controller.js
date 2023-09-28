const Flight = require("../Models/Flight")
const Airline = require("../Models/Airline")

exports.createFlight = async function(req, res){
    
   const {deparetureAirport, arrivealAirport, duration,
     flightNumber,price, boardingGate} = req.body;
     

    try{
        
        if(!deparetureAirport || !arrivealAirport || !duration || !flightNumber)
    
   return res.status(400).json({sucess: false, message: "Please enter namdeparetureAirport, arrivealAirport, duration  & flightNumber"})
     
      let flightNumbe = await Flight.findOne({flightNumber: flightNumber})

      if(!flightNumbe) return res.status(400).json({sucess: false, message: "Flight number alredy excit please change number flight number"})
 
     await  Flight.create({deparetureAirport:deparetureAirport , arrivealAirport: arrivealAirport, duration: duration,  flightNumber: flightNumber, price: price, boardingGate: boardingGate})
        
      await Airline.updateOne({})


    res.status(200).json({sucess: true, message: "Flight created sucessfully"})

    }
    catch(error){

      return res.status(500).json({sucess: false , message:'Error Occured in SignUp Process' + error.message})
    
    }
 
    
}

exports.getFlightById = async function(req, res){
       
     const {airlineId} = req.params.airlineId;
    
       try{

        const airline = await Flight.findOne({_id: airlineId})

        if(!airlineId && !airline) return res.status(400).json({sucess: false, message: "Please enter a valid airlineId"})
            
        
        
        res.status(200).json({sucess: true, airline})

       }catch(error){
        res.status(500).json({sucess: false , message:'Error Occured in SignUp Process' + error.message})
       }



}


exports.updateFlightById= async function(req, res){
    const {airlineId} = req.params.airlineId;
    const {name, website}  = req.body;
    try{
        const airlineId = await Flight.findOne({_id: airlineId})

        if(!airlineId) return res.status(400).json({sucess: false, message: "Please enter a valid airlineId"})
           
        const updateAirline = await Flight.updateOne({_id: airlineId}, {$set:{nmae:name, website: website}})

         if(updateAirline)  res.status(200).json({sucess: true, message: "Update airline sucessfully"})

    }catch(error){

       return res.status(500).json({sucess: false , message:'Error Occured in SignUp Process' + error.message})
    }

}


exports.deleteFlightById =async function(req, res){
    const {airlineId} = req.params.airlineId;
    try{
        const airlineId = await Flight.findOne({_id: airlineId})

        if(!airlineId)  return res.status(400).json({sucess: false, message: "Please enter a valid airlineId"})
           
   
        const deleteId = await Flight.findOne({_id: airlineId})

        if(deleteId)  res.status(200).json({sucess: true, message: "Delete airline sucessfully"})

    }catch(error){
        res.status(500).json({sucess: false , message:'Error Occured in SignUp Process' + error.message})
    }


}