const express = require("express");
const cors = require("cors");
const app = express();
const data = require('./data');

const port = 3000;

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send(data);
})


app.get('/cars/:model', (req, res) => {
    const model = req.params.model;
    const filteredClients = data.filter(
        (client) => client.car.toLowerCase() === model.toLowerCase()
    );
    res.send(filteredClients);
})

app.get('/clients/:id', (req, res) => {
    const id = req.params.id;
    const foundClient = data.find((client) => client.id === Number(id));
    res.send(foundClient);
})

app.get('/emails', (req, res) => {
    const emails = data.map((client) => client.email);
    res.send(emails);
})

app.get('/females', (req, res) => {
    const filteredFemales = data.filter((client) => client.gender === 'Female');
    const femalesFullNames = filteredFemales.map(female => `${female.first_name} ${female.last_name}`
    );
    res.send(femalesFullNames);
})

app.listen(port, () => {
    console.log(`Server is running on the ${port}`);
  });
  