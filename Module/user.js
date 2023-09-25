const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email: {
        type:String,
        require:true,
        unique: true,
        lowercase: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
  password:{
    type:String,
    require:true,
  },
  username: {
    type: String,
    require: true
  }
},
 
) 

module.exports = mongoose.model("User", userSchema);