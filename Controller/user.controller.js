const User = require("../Module/user")

exports.getUserById = async function(req, res){
   let {userId} = req.params.userId
     
   try{
         if(!userId) return res.status(400).json({sucess: false, message: "Faild! User not found"})
            
         
            let user = await User.findOne({email: userId}).select({password: 0})

         if(!user)  return res.status(400).json({sucess: false, message: "Please enter a valid userId"})
           

          res.status(200).json({sucess: true, user})

   }catch(error){
     return res.status(500).json({sucess: false, message: "Some internal server error occured"})
   }
}



exports.getUserByIdAdmin = async function(req, res){

   let {userId} = req.params.userId
     
   try{

      let isUser = await User.findOne({email: userId})

         if(!isUser || !userId) return res.status(400).json({sucess: false, message: "Please enter a userId"})
           
         
         let  user = await User.findOne({email: userId}).select({password: 0})
         

       res.status(200).json({sucess: true, user})

   }catch(error){
      res.status(500).json({sucess: false, message: "Some internal server error occured"})
   }
}





exports.getAllUser = async function(req, res){

   let {userId} = req.params.userId
     
   try{
      let allUser = await User.find({email: userId})

         if(!userId || !allUser) return res.status(400).json({sucess: false, message: "Please enter a userId"})
            
         
       let user = await User.find({email: userId}).select({password: 0})

       res.status(200).json({sucess: true, user})

   }catch(error){
      res.status(500).json({sucess: false, message: "Some internal server error occured"})
   }
}


    

exports.updateUserById = async function(req, res){

   let {userId} = req.params.userId
     
   try{

      let isValid = await User.findOne({email: userId})

         if(!userId || !isValid)  return res.status(400).json({sucess: false, message: "Please enter a userId"})
           
       await User.updateOne({email: userId}, {$set:{username: req.body.username}}).select({password: 0})


       res.status(200).json({sucess: true, message: "User update sucessfully"})

   }catch(error){
      res.status(500).json({sucess: false, message: "Some internal server error occured"})
   }
}



exports.deleteUserById = async function(req, res){


   let {userId} = req.params.userId
     
   try{
      let isUser = await User.findOne({email: userId})

         if(!isUser) return res.status(400).json({sucess: false, message: "Please enter a userId"})
           
         
            await User.deleteOne({email: userId})

       res.status(200).json({sucess: true, message: "User delete sucessfully"})

   }catch(error){
      res.status(500).json({sucess: false, message: "Some internal server error occured"})
   }
}