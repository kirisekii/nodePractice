const express = require('express'); // importavimas express modulio
const app = express(); // aplikacijos sukurimas
const port = 3000; // porto (kanalo) skaicius

//routas (kelias) / path
//get grazina duomenis
app.get('/', (req, res) => {
    // req - request, kas ateina is isores, res - response, kas ateina is vidaus
    res.send('Kristina Kybartaite') // send metodas, issiuncia duomenis
});

app.get('/today', (req, res) => {
    res.send(new Date().toDateString());
});

app.get('/user', (req, res) => {
    const user = {
        name: "Kristina",
        surname: 'Kybartaite',
        age: 29,
    }
    res.send(user);
})

// serverio paleidimas
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});