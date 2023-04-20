const express = require("express");
const cors = require("cors");
const app = express();
const data = require('./data');
const slugify = require('slugify');

const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send(data);
});

app.get('/products/:category', (req, res) => {
    const category = slugify(req.params.category);
    const filteredProducts = data.filter(
        (product) => slugify(product.category.toLowerCase()) === category
    );
    res.send(filteredProducts);
});

app.get('/products/:id', (req, res) => {
    const id = Number(req.params.id);
    const foundProduct = data.find((product) => product.id === Number(id));
    res.send(foundProduct);
});

app.get('/names', (req, res) => {
    const names = data.map((product) => product.name);
    res.send(names);
})

app.get('/stock', (req, res) => {
    const filteredStocks = data.filter((product) => product.stock < 10);
    const stocks = filteredStocks.map(stock => {
      return {
        name: stock.name,
        stock: stock.stock
      }
    });
    res.send(stocks);
  })

app.get('/products/:minPrice/:maxPrice', (req, res) => {
    const minPrice = Number(req.params.minPrice);
    const maxPrice = Number(req.params.maxPrice);
    const filteredProducts = data.filter(product => product.price >= minPrice && product.price <= maxPrice);
    res.send(filteredProducts);
  });
  
  
app.post('/products', (req, res) => {
    const newProduct = req.body; 
    console.log(req.body)
    const isIdExist = data.some((product) => product.id === newProduct.id);
    
    if (isIdExist) {
      res.send('Product with this ID already exists.'); 
    } else {
      data.push(newProduct); 
      res.send(req.body); 
    }
  });

app.listen(port, () => {
    console.log(`Server is running on the ${port}`);
  });
  