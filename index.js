const express = require("express");
const mongoose = require("mongoose");
const CategoryRouter = require("./routes/category");

const app = express();
app.use(express.json());

mongoose // 4QYHciDvPymf9Vo2
  .connect(
    "mongodb+srv://shoxjahonzohirov2010:4QYHciDvPymf9Vo2@dars.trkfrl2.mongodb.net/?retryWrites=true&w=majority&appName=Dars"
  )
  .then(() => console.log("COnnected to db"))
  .catch((e) => console.log({ message: e.message }));

app.use("/category", CategoryRouter);

app.listen(3000, () => console.log("Server start to port 3000"));
