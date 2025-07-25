const mongoose = require("mongoose");
const joi = require("joi");
const ProductSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: {
    type: Number,
    min: 0,
  },
  category: {
    type: mongoose.Types.ObjectId,
    ref: "category",
  },
  count: {
    type: Number,
    min: 0,
  },
});

const Product = mongoose.model("product", ProductSchema);

const productValidator = joi.object({
  name: joi.string().required(),
  image: joi.string().uri().required(),
  price: joi.number().min(0).required(),
  category: joi.string().required(),
  count: joi.number().min(0).required(),
});

module.exports = { Product, productValidator };
