const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  product_name: {
    type: String,
    required: false,
  },
  product_image : {
    type: String,
    required: false,
  },
  product_id: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: false,
  },
  price: {
    type: Number,
    required: false
  }
});

module.exports = mongoose.model("Cart", CartSchema);