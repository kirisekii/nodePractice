const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

const cars = ['mercedes'];

app.get("/", (req, res) => {
    res.send(cars);
  });
  
  app.post("/", (req, res) => {
      const car = req.body.car;
      console.log(req.body);
      cars.push(car);
      res.send(req.body);
    });

   
  app.listen(port, () => {
    console.log(`Server is running on the ${port}`);
  });
  