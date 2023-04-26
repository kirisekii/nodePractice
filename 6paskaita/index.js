const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(cors());

const cart = [];

app.get("/cart", (req, res) => {
  res.send(cart);
});
