const mongoose = require('mongoose')

const RegisterSchema = mongoose.Schema(
  {
    name: String,   
    surename:{
      type:String
    },
    username:{
      type:String
    },
    tel:{
      type:String
    },
    password: {
      type: String,
    },
    
  },
  { timestamps: true }
)

module.exports = mongoose.model("information", RegisterSchema)