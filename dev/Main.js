const express = require('express');
const app = express();
const path = require('path');
var bodyParser = require('body-parser');

const users = require('./routes/users');

app.get('/', function(req,res){
    res.json({'hello': 'world'});
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/users', users);

app.listen(5000);