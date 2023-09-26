
const User = require("../Module/user")

exports.validactionVerify = async function (req, res, next){
         
   const {email,username, password} = req.body;
   
   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     
    let isValidate = emailRegex.test(email);
       
    if(isValidate === false){
         
       return res.status(400).json({sucess:false , message: "Faild! invalid email id"})
       
      }
    

    if(!username || typeof(username) != "string")
    
       return res.status(400).json({sucess: false , message: "Faild! please enter username"})

      if(!password || typeof(password) != "string") 
          
      return res.status(400).json({sucess: false , message: "Faild! please enter password"})

    
    if(!email || typeof(email) != "string")
    
      return res.status(400).json({sucess: false , message: "Faild! email isn't valid"})

    const isValidMail = await User.findOne({email: email})  
     
    if(isValidMail)

    return res.status(400).json({sucess: false , message: "Faild! email alredy present"})



    next()
}