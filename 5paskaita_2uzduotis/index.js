const express = require("express");
const cors = require("cors");
const port = 3000;

const app = express();
app.use(express.json());
app.use(cors());

const cart = [];

app.get("/cart", (req, res) => {
  res.send(cart);
});

app.post("/cart", (req, res) => {
  const product = req.body;
  cart.push(product);
  res.send(product);
});

app.get("/cart/item/:id", (req, res) => {
  const id = Number(req.params.id);
  const foundProduct = cart.find((product) => product.id === id);
  res.send(foundProduct);
});

app.listen(port, () => {
  console.log(`Server is running on the ${port}`);
});
