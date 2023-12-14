const mongoose = require('mongoose')

const RegisterSchema = mongoose.Schema(
  {
    firstname: String,   
    surname:{
      type:String
    },
    tel:{
      type:String
    },
    username:{
      type:String
    },
    password: {
      type: String,
    },
    
  },
  { timestamps: true }
)

module.exports = mongoose.model("information", RegisterSchema)