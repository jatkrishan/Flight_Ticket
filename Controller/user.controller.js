const User = require("../Module/user")

exports.getByIdUser = async function(req, res){
   let {id} = req.params.id
     
   try{
         if(!id){
            res.status(400).json({sucess: false, message: "Please enter a id"})
         }
            let user = await User.findOne({email: id}).select({password: 0})
         if(!user){
            res.status(400).json({sucess: false, message: "Please enter a valid id"})
         }

       res.status(200).json({sucess: true, user})

   }catch(error){
      res.status(500).json({sucess: false, message: "Some internal server error occured"})
   }
}



exports.getByIdAdmon = async function(req, res){

   let {id} = req.params.id
     
   try{
         if(!id){
            res.status(400).json({sucess: false, message: "Please enter a id"})
         }
            let user = await User.findOne({email: id}).select({password: 0})
         if(!user){
            res.status(400).json({sucess: false, message: "Please enter a valid id"})
         }

       res.status(200).json({sucess: true, user})

   }catch(error){
      res.status(500).json({sucess: false, message: "Some internal server error occured"})
   }
}





exports.getByAll = async function(req, res){

   let {id} = req.params.id
     
   try{
         if(!id){
            res.status(400).json({sucess: false, message: "Please enter a id"})
         }
            let user = await User.find({email: id}).select({password: 0})
         if(!user){
            res.status(400).json({sucess: false, message: "Please enter a valid id"})
         }

       res.status(200).json({sucess: true, user})

   }catch(error){
      res.status(500).json({sucess: false, message: "Some internal server error occured"})
   }
}


    

exports.updateByIdAdmin = async function(req, res){

   let {id} = req.params.id
     
   try{
         if(!id){
            res.status(400).json({sucess: false, message: "Please enter a id"})
         }
            let user = await User.updateOne({email: id}, {$set:{username: req.body.username}}).select({password: 0})

         if(!user){

            res.status(400).json({sucess: false, message: "Please enter a valid id"})
         }

       res.status(200).json({sucess: true, message: "User update sucessfully"})

   }catch(error){
      res.status(500).json({sucess: false, message: "Some internal server error occured"})
   }
}



exports.deleteByIdAdmin = async function(req, res){


   let {id} = req.params.id
     
   try{
         if(!id){
            res.status(400).json({sucess: false, message: "Please enter a id"})
         }
            let user = await User.deleteOne({email: id})

         if(!user){

            res.status(400).json({sucess: false, message: "Please enter a valid id"})
         }

       res.status(200).json({sucess: true, message: "User delete sucessfully"})

   }catch(error){
      res.status(500).json({sucess: false, message: "Some internal server error occured"})
   }
}