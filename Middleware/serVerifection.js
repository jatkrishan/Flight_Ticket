const jwt = require("jsonwebtoken")
const configKey = require("../Config/auth.config")
const User = require("../Module/user")
const constent = require("../unites/constent") 

exports.isValidUser = async function(req, res, next){
    
    let token = req.headers["x-access-token"]
   
      
    try{
      
        if(!token)  return res.status(400).json({sucess: false, message: "Please enter a token"})
       
        
        
   
        jwt.verify(token, configKey.secretKey, (error, decoded) => {

            if(error){
                return res.status(401).send({message: "Request cannot be authenticated. Token is invalid"})   
                 }
    
                 req.userId = decoded.id


                 next()
         })

               
                
    }catch(error){
        return res.status(500).json({sucess: false, message: "Error Occured in server fsdf  Process"})
    
    }

   
}




exports.isAdmin = async function async(req, res, next){
   
     try{
          let isValidAdmin = await User.findOne({_id: req.userId})
          

          if(isValidAdmin.role != constent.roleType.admin)  
         return res.status(400).json({sucess: false, message: "Faild! only admin allowed"})
            

              next()

     }catch(error){
        return res.status(500).json({sucess: false, message: "Error Occured in server Process"})
     }

}