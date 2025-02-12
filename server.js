require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send(`Vamsi is back!`);
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to Database!");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
