const express = require('express');
const cors = require('cors');

require('dotenv').config();

const port = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(cors());

const todos = [];

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const todo = req.body;
  const newTodo = { id: todos.length + 1, ...todo };
  todos.push(newTodo);
  res.send(newTodo);
});

app.get('/todos/:id', (req, res) => {
  const id = +req.params.id;
  const foundTodo = todos.find((todo) => todo.id === id);
  if (foundTodo) {
    res.send(foundTodo);
  } else {
    res.status(404).send({ message: 'Todo not found' });
  }
});

app.delete('/todos/:id', (req, res) => {
  const id = +req.params.id;
  const foundIndex = todos.findIndex((todo) => todo.id === id);
  if (foundIndex !== -1) {
    const deletingTodo = todos.find((todo) => todo.id === id);
    todos.splice(foundIndex, 1);
    res.send(deletingTodo);
  } else {
    res.status(404).send({ message: 'todo not found' });
  }
});

app.put('/todos/:id', (req, res) => {
  const id = +req.params.id;
  const foundIndex = todos.findIndex((todo) => todo.id === id);
  if (foundIndex !== -1) {
    const todo = req.body;
    const updatingTodo = { id, ...todo };
    todos.splice(foundIndex, 1, updatingTodo);
    res.send(updatingTodo);
  } else {
    res.status(404).send({ message: 'not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on the ${port}`);
});
