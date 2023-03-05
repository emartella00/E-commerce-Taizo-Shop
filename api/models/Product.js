const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true, },
    img: { type: String, required: true },
    categories: { type: Array },
   subcategories : {type:Array},
   subcategories2 : {type:Array},
   brand:{type:String},
    size: { type: Array },
    price: {  type: Array, required: true },
    inStock:{type: Boolean, default:true},
    promo:{type: Boolean, default:false},
    perc:{type: Number},
    pricestock:{type: Array},
    ingredients:{type:String},
    desc2:{type:String}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);