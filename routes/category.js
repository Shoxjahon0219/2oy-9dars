const express = require("express");
const { Category, categoryValidator } = require("../models/category");

const router = express.Router();

router.get("/", async (req, res) => {
  let data = await Category.find();
  res.json(data);
});

router.post("/", async (req, res) => {
  try {
    let { value, error } = categoryValidator.validate(req.body);
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

module.exports = router;
