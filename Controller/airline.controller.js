const Airline = require("../Module/airline")

exports.createAirline = async function(req, res){
   const {name, website} = req.body;

    try{
        
        if(!name || !website && typeof(name,website) != "string")
    
   return res.status(400).json({sucess: false, message: "Please enter name & website & all vale are string"})
     

     await  Airline.create({name: name, website: website})
        
    res.status(200).json({sucess: true, message: "Airline created sucessfully"})

    }
    catch(error){

      return res.status(500).json({sucess: false , message:'Error Occured in SignUp Process' + error.message})
    }
 
    
}

exports.getAirlineById = async function(req, res){
       
     const {airlineId} = req.params.airlineId;
    
       try{

        const airline = await Airline.findOne({_id: airlineId})

        if(!airlineId && !airline) return res.status(400).json({sucess: false, message: "Please enter a valid airlineId"})
            
        
        
        res.status(200).json({sucess: true, airline})

       }catch(error){
        res.status(500).json({sucess: false , message:'Error Occured in SignUp Process' + error.message})
       }



}


exports.updateAirlineById= async function(req, res){
    const {airlineId} = req.params.airlineId;
    const {name, website}  = req.body;
    try{
        const airlineId = await Airline.findOne({_id: airlineId})

        if(!airlineId) return res.status(400).json({sucess: false, message: "Please enter a valid airlineId"})
           
        const updateAirline = await Airline.updateOne({_id: airlineId}, {$set:{nmae:name, website: website}})

         if(updateAirline)  res.status(200).json({sucess: true, message: "Update airline sucessfully"})

    }catch(error){
        res.status(500).json({sucess: false , message:'Error Occured in SignUp Process' + error.message})
    }

}


exports.deleteAirlineById =async function(req, res){
    const {airlineId} = req.params.airlineId;
    try{
        const airlineId = await Airline.findOne({_id: airlineId})

        if(!airlineId)  return res.status(400).json({sucess: false, message: "Please enter a valid airlineId"})
           
   
        const deleteId = await Airline.findOne({_id: airlineId})

        if(deleteId)  res.status(200).json({sucess: true, message: "Delete airline sucessfully"})

    }catch(error){
        res.status(500).json({sucess: false , message:'Error Occured in SignUp Process' + error.message})
    }


}