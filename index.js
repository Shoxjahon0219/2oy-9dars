const express = require("express");
const mongoose = require("mongoose");
const CategoryRouter = require("./routes/category");

const app = express();
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://shoxjahonzohirov2010:VMQdTaUxX6omXX5z@darss.h2xtyp4.mongodb.net/myapp"
  )
  .then(() => console.log("COnnected to db"))
  .catch((e) => console.log({ message: e.message }));

app.use("/category", CategoryRouter);

app.listen(3000, () => console.log("Server start to port 3000"));
