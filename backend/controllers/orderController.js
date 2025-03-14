const Order = require("../models/Order");

const createOrder = async (req, res) => {
  const { user, products, totalAmount } = req.body;
  const order = new Order({ user, products, totalAmount });
  await order.save();
  res.status(201).json({ message: "Order placed successfully" });
};

module.exports = { createOrder };

