const mongoose = require("mongoose");
const joi = require("joi");
const CategorySchema = new mongoose.Schema({
  name: String,
  image: String,
});

const Category = mongoose.model("category", CategorySchema);

const categoryValidator = joi.object({
  name: joi.string().required(),
  image: joi.string().uri().required(),
});

module.exports = { Category, categoryValidator };
