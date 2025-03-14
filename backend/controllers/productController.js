const Product = require("../models/Product");

const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

const createProduct = async (req, res) => {
  const { name, price, description, image } = req.body;
  const product = new Product({ name, price, description, image });
  await product.save();
  res.status(201).json({ message: "Product created successfully" });
};

module.exports = { getProducts, createProduct };

