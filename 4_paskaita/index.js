const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

const cars = {
    bmw: ['i3', 'i6', '1series'],
    mb: ['a class'],
    vw: ['polo', 'golf', 'UP'],
    lexus: ['is250', 'nx', 'rx']
};

//dinaminis linkas, kai prasideda su dvitaskiu : 
app.get('/cars/:model', (req, res) => {

    // req.params - requesto parametrai
    // jei norime pasiekti dinamini linka, turime naudote toki pati pavadinimas, pvz :model butu req.params.model
    const model = req.params.model;
    res.send(cars[model]);
})

 
app.listen(port, () => {
  console.log(`Server is running on the ${port}`);
});
