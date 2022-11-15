var express = require('express');
var router = express.Router();

var knex = require('../knex');
function Items() {
  return knex('items');
}

router.get('/', (req, res) => {
  Items().select('*').then(items => {
    res.json(items);
  });
});

router.get('/:id', (req, res) => {
  Items().where({id: req.params.id}).then(item => {
    res.json(item);
  });
});

router.post('/', (req, res) => {
  Items().insert({ 
    name: req.body.name, 
    quantity: req.body.quantity, 
    price: req.body.price, 
    category: req.body.category,
    image_url: req.body.image_url
  })
  .returning('*')
  .then(item => {
    res.status(201).send(item);
  });
});

router.put('/:id', (req, res) => {
  Items().update({ 
    name: req.body.name, 
    quantity: req.body.quantity, 
    price: req.body.price, 
    category: req.body.category,
    image_url: req.body.image_url
  })
  .where({id: req.params.id})
  .returning('*')
  .then(item => {
    res.status(200).send(item);
  });
});

router.delete('/:id', (req, res) => {
  Items().where({id: req.params.id}).del()
  .then(result => {
    res.status(200).send(req.params.id);
  });
});


module.exports = router;