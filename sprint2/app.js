const express = require('express');
const app = express();
const port = 3030;
const path = require('path');


app.use(express.static('public'));

app.get('/', (req,res) => res.sendFile(path.join(__dirname, '/views','index.html')));
app.get('/register', (req,res) => res.sendFile(path.join(__dirname, '/views','register.html')));
app.get('/login', (req,res) => res.sendFile(path.join(__dirname, '/views','login.html')));
app.get('/cart', (req,res) => res.sendFile(path.join(__dirname, '/views','cart.html')));
app.get('/detail-product', (req,res) => res.sendFile(path.join(__dirname, '/views','detailProduct.html')));
app.get('/product-loading', (req,res) => res.sendFile(path.join(__dirname, '/views','productLoding.html')));



app.listen(port, () => console.log('Server running on the port' + port));