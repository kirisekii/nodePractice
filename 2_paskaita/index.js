const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;
 
const names = ["Kristina"];
 
app.get("/", (req, res) => {
  res.send(names);
});

app.post("/", (req, res) => {
    const name = req.body.name;
    console.log(req.body);
    names.push(name);
    res.send(req.body);
  });
 
app.listen(port, () => {
  console.log(`Server is running on the ${port}`);
});
