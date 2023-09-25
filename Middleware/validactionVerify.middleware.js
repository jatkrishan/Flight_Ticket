
const User = require("../Module/user")

exports.validactionVerify = async function (req, res, next){
         
   let body = req.body;
   
   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     
    let isValidate = emailRegex.test(body.email);
       
    if(isValidate === false){
         
       return res.status(400).json({sucess:false , message: "Faild! invalid email id"})
       
      }
    
    
    if(!body.username || typeof(body.username) != "string")
    
       return res.status(400).json({sucess: false , message: "Faild! please enter username"})

      if(!body.password || typeof(body.password) != "string") 
          
      return res.status(400).json({sucess: false , message: "Faild! please enter password"})

    
    if(!body.email || typeof(body.email) != "string")
    
       res.status(400).json({sucess: false , message: "Faild! email isn't valid"})

    const email = await User.findOne({email: body.email})  
     
    if(email)

     res.status(400).json({sucess: false , message: "Faild! email alredy present"})



    next()
}