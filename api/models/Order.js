const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: {
          type: String,
        },

        quantity: {
          type: Number,
          default: 1,
        },
        img:{type:String,},
        size:{type:Array,},
        amountp:{type:Number,}

      
      },
    ],
    amount: { type: Number, required: true },
    address: { type: Array, required: true },
    status: { type: String, default: "pending" },
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);