const User = require("../Module/user")
const bcrypt = require("bcryptjs")
const authKey = require("../Config/auth.config")
const jwt = require("jsonwebtoken")


exports.signup = async function(req, res){
         const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
          })
        
          try{
            if(user) res.status(200).json({sucess: true, message: "Regestraction sucessfully"})
            
                

        }catch(error){
            res.status(500).json({sucess:false, message:'Error Occured in SignUp Process' + error.message})
        }
          

}


exports.signin = async function(req, res){
        const {email, password} = req.body;

    var user = await User.findOne({email: email})
   
      try{
  
   
      if(!user)  return res.status(400).json({sucess:false, message:'Error! User not found'})
      
    
         
    var isValid= bcrypt.compareSync(password, user.password)

    if(!isValid)  return res.status(400).json({sucess:false, message:'Error! passwrd is invalid'})
      
    
   
    var token = jwt.sign({id: user.id}, authKey.secretKey, {
        expiresIn: "1d"
    
    })
    
        res.status(200).json({userId: user.userId, userType: user.userType, accessToken: token})

    }catch(error){

        res.status(500).json({sucess:false, message:'Error Occured in SignUp Process' + error.message})
    }
     
}