const express = require('express');
const app = express();
const path = require('path');
var bodyParser = require('body-parser');
var cors = require("cors");

const users = require('./routes/users');
const items = require('./routes/items');
const orders = require('./routes/orders');
const cart_items = require('./routes/cart_items');
const order_items = require('./routes/order_items');
const promo_codes = require('./routes/promo_codes');

app.get('/', function(req,res){
    res.json({'hello': 'world'});
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/users', users);
app.use('/api/items', items);
app.use('/api/orders', orders);
app.use('/api/cart_items', cart_items);
app.use('/api/order_items', order_items);
app.use('/api/promo_codes', promo_codes);

app.listen(5000);
