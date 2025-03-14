const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  category: String,
  quantity: { type: Number, required: true } 
});

module.exports = mongoose.model("Product", productSchema);
