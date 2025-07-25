const express = require("express");
const { Product, productValidator } = require("../models/product");

const route = express.Router();

route.get("/", async (req, res) => {
  let { page = 1, take = 5, price, count } = req.query;
  let skip = (+page - 1) * take;
  let filter = {};
  if (price) filter.price = +price;
  if (count) filter.count = count;

  try {
    let prods = await Product.find(filter)
      .skip(skip)
      .limit(take)
      .populate("category", "name");
    res.json(prods);
  } catch (e) {
    res.json({ message: e.message });
  }
});

route.post("/", async (req, res) => {
  try {
    let { error } = productValidator.validate(req.body);
    if (error) {
      return res.json({ message: error.details[0].message });
    }
    let newPrd = new Product(req.body);
    await newPrd.save();
    res.status(201).send(newPrd);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

route.patch("/:id", async (req, res) => {
  let body = req.body;
  let id = req.params.id;

  try {
    let { error } = productValidator.validate(body);
    if (error) {
      return res.json({ message: error.details[0].message });
    }
    let upd = await Product.findByIdAndUpdate(id, body, { new: true });
    res.json(upd);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

route.delete("/:id", async (req, res) => {
  let id = req.params.id;

  try {
    let del = await Product.findByIdAndDelete(id);
    res.json(del);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});``

module.exports = route;
