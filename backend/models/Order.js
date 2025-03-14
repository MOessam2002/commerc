const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  products: [{ product: Object, quantity: Number }],
  totalAmount: Number,
});

module.exports = mongoose.model("Order", orderSchema);

