const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    tel: { type: String,required: true  },
    name: { type: String,required: true  },
    surname: { type: String,required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    wishlist: [{
      _id: {
        type: String,
      },
      title: {
        type: String,
      },
     
      brand: {
        type: String,
      },
      img:{
        type:String,
      },
    
    
      
     
    },
    ],
   
  
  },


 
  { timestamps: true }

);

module.exports = mongoose.model("user", UserSchema);