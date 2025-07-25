const express = require("express");
const { Category, categoryValidator } = require("../models/category");

const route = express.Router();

route.get("/", async (req, res) => {
  let data = await Category.find();
  res.json(data);
});

route.post("/", async (req, res) => {
  try {
    let { error } = categoryValidator.validate(req.body);
    if (error) {
      return res.json({ message: error.details[0].message });
    }
    let data = new Category(value);
    await data.save();
    res.status(201).json(data);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

route.patch("/:id", async (req, res) => {
  let body = req.body;
  let id = req.params.id;

  try {
    let { error } = categoryValidator.validate(body);
    if (error) {
      return res.json({ message: error.details[0].message });
    }
    let upd = await Category.findByIdAndUpdate(id, body, { new: true });
    res.json(upd);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

route.delete("/:id", async (req, res) => {
  let id = req.params.id;

  try {
    let del = await Category.findByIdAndDelete(id);
    res.json(del);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

module.exports = route;
