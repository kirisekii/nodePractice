const express = require('express');
const cors = require('cors');

require('dotenv').config();

const port = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(cors());

const tickets = [];

app.get('/tickets', (req, res) => {
  res.send(tickets);
});

app.post('/tickets', (req, res) => {
  const ticket = req.body;
  tickets.push(ticket);
  res.send(ticket);
});

app.get('/tickets/:id', (req, res) => {
  const id = Number(req.params.id);
  const foundTicket = tickets.find((ticket) => ticket.id === id);
  res.send(foundTicket);
});

app.listen(port, () => {
  console.log(`Server is running on the ${port}`);
});
