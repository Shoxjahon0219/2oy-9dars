const express = require("express");
const mongoose = require("mongoose");
const CategoryRouter = require("./routes/category");
const ProductRouter = require("./routes/product");

const app = express();
app.use(express.json());

mongoose // 4QYHciDvPymf9Vo2
  .connect(
    "mongodb+srv://shoxjahonzohirov2010:Shox0219@klasteruyishi9dars.bezn4mr.mongodb.net/?retryWrites=true&w=majority&appName=KlasterUyishi9dars"
  )
  .then(() => console.log("COnnected to db"))
  .catch((e) => console.log({ message: e.message }));

app.use("/category", CategoryRouter);
app.use("/products", ProductRouter);

app.listen(3000, () => console.log("Server start to port 3000"));
