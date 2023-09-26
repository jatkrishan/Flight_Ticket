const Airline = require("../Module/airline")

exports.createAirline = async function(req, res){
   const {name, website} = req.body;
    try{
        if(!name || !website && typeof(name,website) != "string"){
            res.status(400).json({sucess: false, message: "Please enter name & website & all vale are string"})
     }

     await  Airline.create({name: name, website: website})
        
        res.status(200).json({sucess: true, message: "Airline created sucessfully"})

    }catch(error){
      res.status(500).json({sucess: false , message:'Error Occured in SignUp Process' + error.message})
    }
 
    
}

exports.getByIdAirline = async function(req, res){
       const {id} = req.params.id;
    
       try{
        const airline = await Airline.findOne({_id: id})
        if(!id && !airline){
            res.status(400).json({sucess: false, message: "Please enter a valid id"})
        }
        
        res.status(200).json({sucess: true, airline})

       }catch(error){
        res.status(500).json({sucess: false , message:'Error Occured in SignUp Process' + error.message})
       }



}


exports.updateByIdAirline = async function(req, res){
    const {id} = req.params.id;
    const {name, website}  = req.body;
    try{
        const updateAirline = await Airline.updateOne({_id: id}, {$set:{nmae:name, website: website}})
        if(!updateAirline && !id){
            res.status(400).json({sucess: false, message: "Please enter a valid id"})
        }

          res.status(200).json({sucess: true, message: "Update airline sucessfully"})
    }catch(error){
        res.status(500).json({sucess: false , message:'Error Occured in SignUp Process' + error.message})
    }

}


exports.deleteByIdAirline =async function(req, res){
    const {id} = req.params.id;
    const {name, website}  = req.body;
    try{
        const updateAirline = await Airline.deleteOne({_id: id})
        if(!updateAirline && !id){
            res.status(400).json({sucess: false, message: "Please enter a valid id"})
        }

          res.status(200).json({sucess: true, message: "Delete airline sucessfully"})
    }catch(error){
        res.status(500).json({sucess: false , message:'Error Occured in SignUp Process' + error.message})
    }


}